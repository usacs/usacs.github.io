# These are a few static scripts to make testing easier.
# (That's the default. Run with -h for more.)

import os
import os.path as path
import requests

def set_image_sources(json_path, image_processor):
    """Sets the image sources in the JSON.
       Assumes that the image_processor returns the new URL."""
    import json
    with open(json_path) as in_file:
        mentors = json.load(in_file)

    for mentor in mentors:
        mentor["pictureToRepresentYou"] = image_processor(mentor["pictureToRepresentYou"], mentor["fullName"], mentor["timestamp"])

    with open(json_path, 'w') as out_file:
        json.dump(mentors, out_file, indent = 4)

def id_from_gdrive_url(img_src):
    """Get the id param from the gdrive URLs"""
    return img_src[img_src.find('id') + 3:]

def get_from_gdrive(img_id, save_path):
    """Get an image from google drive.
       Appends the file type to save_path,
       creates the file at the save_path (with the type added on),
       and returns the path to the file."""
    #I'm not the genius, https://stackoverflow.com/a/39225272 is.
    base_url = "https://docs.google.com/uc?export=download"

    session = requests.Session()
    response = session.get(base_url, params = {'id': img_id}, stream = True)
    token = None
    for key, value in response.cookies.items():
        if key.startswith('download-warning'):
            token = value

    if token:
        params = {'id': img_id, 'confirm': token}
        reponse = session.get(base_url, params = params, stream = True)

    # I'm pretty sure this isn't a good idea, but it works.
    img_type = response.headers['content-type'].split('/')[1]
    save_path = save_path + '.' + img_type

    with open(save_path, 'wb') as save_file:
        for chunk in response.iter_content(32768):
            if chunk: save_file.write(chunk)

    return save_path

def image_processor(img_src, mentor_name, timestamp):
    """Gets the image, if necessary. The timestamp ensures that
       images are unique even when names aren't.

       Does everything to avoid re-downloading images."""
    pics_dir = "assets/img/mentors"
    # The current pictures.
    pics = {path.join(pics_dir, file) for file in os.listdir(pics_dir) if path.isfile(path.join(pics_dir, file))}

    # Either the JSON file is up-to-date.
    if img_src in pics:
        return img_src

    # Or the pictures are up-to-date, and the JSON file is changing.
    new_img_src = path.join(pics_dir, mentor_name.replace(' ', '_') + timestamp)
    for pic in pics:
        if pic.startswith(new_img_src):
            return pic

    #Otherwise, download the image.
    return get_from_gdrive(id_from_gdrive_url(img_src), new_img_src)

if __name__ == '__main__':
    from sys import argv

    # by default, run the server.
    if len(argv) <= 1 or argv[1] == 'test-server':
        import http.server as srv
        server = srv.HTTPServer(('', 8080), srv.SimpleHTTPRequestHandler)
        server.serve_forever()
    elif argv[1] == 'mentor-pics':
        set_image_sources('assets/mentors.json', image_processor)
    elif argv[1] == '-h':
        print("Run {} test-server to run a quick testing server.".format(argv[0]))
        print("Run {} mentor-pics to load the mentor images.".format(argv[0]))
    elif argv[1]=="build":
        import compile
        dirName="views"
        globalData={}
        layoutName="layouts/layout.mustache"
        outputDir="."
        compile.compile(dirName, layoutName, outputDir, globalData)
    else:
        print("Dude, wut?")
        print("Run '-h' for help.")

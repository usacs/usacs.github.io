# These are a few static scripts to make testing easier.
# (That's the default. Run with -h for more.)

if __name__ == '__main__':
    from sys import argv

    # by default, run the server.
    if len(argv) <= 1 or argv[1] == 'test-server':
        import http.server as srv
        server = srv.HTTPServer(('', 8080), srv.SimpleHTTPRequestHandler)
        server.serve_forever()
    elif argv[1] == 'mentor-pics':
        print("Coming soon!")
    elif argv[1] == '-h':
        print("Run {} test-server to run a quick testing server.".format(argv[0]))
        print("Run {} mentor-pics to load the mentor images.".format(argv[0]))
    else:
        print("Dude, wut?")
        print("Run '-h' for help.")

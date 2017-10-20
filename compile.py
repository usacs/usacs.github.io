# python3 compile.py build <dirname> <layout name> <output dir> <optional json data>

# builds json array from files to build
# excludes layout file


import pystache
renderer=pystache.Renderer()

def file2json(dirName, fileName, data):
    filePath=dirName+'/'+fileName
    title=fileName.replace('.mustache', '')
    outputName=fileName.replace('.mustache', '.html')
    fileContents=renderer.render_path(filePath, data)
    return {'title':title, 'body':fileContents, 'outputName':outputName}

def render (dirName, layoutName, pageData):
    layoutLocation=dirName+"/"+layoutName
    return renderer.render_path(layoutLocation, pageData)

def getFiles(dirName, layoutName, data):
    from os import listdir
    files=listdir(dirName)
    files=filter((lambda x:x!=layoutName),files)
    files=list(map((lambda fileName:file2json(dirName, fileName, data)),files))
    return files

def compile(dirName, layoutName, outputDir, globalData):
    files=getFiles(dirName, layoutName, globalData)
    
    renderFunc=(lambda pageData:render(dirName, layoutName, pageData))#.update(globalData)))
    renderedFiles=list(map(renderFunc, files))

    for i in range(0, len(files)):
        name=outputDir+"/"+files[i]['outputName']
        content=renderedFiles[i]
        file=open(name, 'w')
        file.write(content)

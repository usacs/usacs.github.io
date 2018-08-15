# copyright Michael J Winters 2017
# licensed under apache 2.0

import pystache
renderer=pystache.Renderer()

def file2json(dirPath, data):
    def curriedFunc(fileName):
        filePath=dirPath+'/'+fileName
        title=fileName.replace('.mustache', '')
        outputName=fileName.replace('.mustache', '.html')
        fileContents=renderer.render_path(filePath, data)
        return {'title':title, 'body':fileContents, 'outputName':outputName} # , 'links': ['test']
    return curriedFunc

def render(dirPath, layoutPath, globalData):
    def curriedFunc(pageData):
        pageData.update(globalData)
        return renderer.render_path(layoutPath, pageData)
    return curriedFunc

# builds json array from files to build
def getFiles(dirPath, layoutPath, globalData, exclusions):
    from os import listdir
    viewNames=listdir(dirPath)
    files = [file2json(dirPath, globalData)(viewName) for viewName in viewNames if viewName.endswith('.mustache') and viewName not in exclusions]
    return files

def compile(dirPath, layoutPath, exclusions, outputDir='.', globalData={}):
    files=getFiles(dirPath, layoutPath, globalData, exclusions)

    renderedFiles=list(map(render(dirPath, layoutPath, globalData), files))

    # todo generate navbar based on exclusion

    for i in range(0, len(files)):
        name=outputDir+'/'+files[i]['outputName']
        content=renderedFiles[i]
        with open(name, 'wb') as file:
            try:
                file.write(bytes(content.encode('utf8')))
            except UnicodeEncodeError as e:
                print("Failure on", name, ":", e)
                print("Was writing:")
                print(content.encode('utf-8'))

# example compilation
#compile('views', 'layouts/layout.mustache')
#compile('views', 'layouts/copyLayout.mustache', globalData={'copyrightYear':'2017'})

#globalD={}
#compile('views', 'layouts/layout.mustache', globalData=globalD)

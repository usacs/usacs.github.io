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
        return {'title':title, 'body':fileContents, 'outputName':outputName}
    return curriedFunc

def render(dirPath, layoutPath, globalData):
    def curriedFunc(pageData):
        pageData.update(globalData)
        return renderer.render_path(layoutPath, pageData)
    return curriedFunc

# builds json array from files to build
def getFiles(dirPath, layoutPath, globalData):
    from os import listdir
    viewNames=listdir(dirPath)
    files=list(map(file2json(dirPath, globalData),viewNames))
    return files

def compile(dirPath, layoutPath, outputDir='.', globalData={}):
    files=getFiles(dirPath, layoutPath, globalData)
    
    renderedFiles=list(map(render(dirPath, layoutPath, globalData), files))

    for i in range(0, len(files)):
        name=outputDir+'/'+files[i]['outputName']
        content=renderedFiles[i]
        file=open(name, 'w')
        file.write(content)

# example compilation
#compile('views', 'layouts/layout.mustache')
#compile('views', 'layouts/copyLayout.mustache', globalData={'copyrightYear':'2017'})

#globalD={}
#compile('views', 'layouts/layout.mustache', globalData=globalD)

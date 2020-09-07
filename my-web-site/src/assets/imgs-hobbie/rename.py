import os
path = 'C:\Users\Lucas\Documents\Github\Angular\my-angular-website\my-web-site\src\assets\imgs-hobbie'
files = os.listdir(path)


for index, file in enumerate(files):
    os.rename(os.path.join(path, file), os.path.join(path, ''.join([str(index), '.jpg'])))
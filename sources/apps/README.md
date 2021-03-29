# HOW TO CREATE APP?
first you need to create index.js & icon file.

example: 
```
.
|
| - images
|       |- icon.png
| - views
|       |- index.html
| - main.js
```

Then you need to modifed the installed apps file

example:
```json
{
    "apps": [
        {
            "name": "File Explorer",
            "icon_route": "/apps/FileExplorer/images/icon-file-explorer.png",
            "main_route": "/apps/FileExplorer/index.js",
            "id": "001"
        },
        {
            "name": "Internet",
            "icon_route": "/apps/navegador/images/icon-explorer.png",
            "main_route": "/apps/navegador/main.js",
            "id": "002"
        },
        {
            "name": "new app",
            "icon_route": "/apps/newApp/images/icon.png",
            "main_route": "/apps/newApp/main.js",
            "id": "003"
        }
    ]
}
```

Then you need exports class with static method main

example:

```js
// file name = main.js
export default class app {
    static main(){
        // the code of the app
    }
}
```

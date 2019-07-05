**Digital Foundry Video Browser** is a browser add-on that provides an easily navigable interface for viewing available videos on [Digital Foundry's video-hosting site](https://www.digitalfoundry.net). 

_Disclosure: The developer of this software is not affiliated with Digital Foundry, Eurogamer, or its parent company._

### Prerequisites
##### Environment

It should be possible to build this extension on any OS that can host node/npm. However it was developed and tested only on Windows 10. 

##### Dependencies
`npm` - version 6.2 was used for development. Other versions may work, but were not tested.

`web-ext` - Optional. This can be used to package the `Extension/` directory into a .zip file for loading in Firefox (see below). 

### Setup
If you're reading this, you've likely already downloaded or checked-out the code repo for DF Video Browser. If not, you can get the code [here](https://github.com/AJLeuer/DigitalFoundryVideoBrowser).


### Building & Running

Inside the the top-level directory of the repository, run:
    
    npm install
    npm run build
    
Or, alternatively, if you're on Windows, you can use the provided build script: `BuildScript.cmd` 

Once the `npm run build` is completed, the built (but not packaged) addon can be found inside the `Extension/` directory.

##### Optional
Firefox can load the WebExtension in its unpackaged state by pointing it to the `manifest.json` inside the `Extension/` directory.
However, if you wish to package the addon, you can run `web-ext build` from inside `Extension/`.  
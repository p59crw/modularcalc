# modularcalc
Customizable online calculator using HTML, CSS, jQuery &amp; jQueryUI.

Elements can be dragged, resized, removed, and connected to other elements to form clusters as needed to create a calculator environment tailored to the specific types of calculations the user wishes to make.

#### Website: modularcalc.curtisrwhite.com

#### File List:
- `index.html` houses the layout. Each element is connected to a CSS class name used by jQueryUI to give it interactive functionality.
- `style.css` contains custom styles which override the default styles added by jQueryUI's style sheets.
- `jquery-ui.css` contains the default styles for the jQuery interface.
- `jquery-ui.js` contain the framework for allowing objects to be interacted with. 
- My custom JS file `calculator-interface.js` provides the calls to jQueryUI which add the interactive behavior. Added conditional logic allows the Toolbar to toggle functionality as needed. The secod half of the file contains the calculator logic so that simple math can be carried out and displayed on the result bar.

#### TO-DO:
- Add extra DOM logic so that elements can be joined in clusters which move together.
- Fix broken Delete logic.
- Add extended math functionality.
- Fix issue where inputting any string into the result bar prevents resizing.
- Add docking mode which allows toolbar to be docked and undocked from edges of browser.
- Improve interface styles.
- Fix issue where adding resizing tabs to horizontally aligned elements pushes them to align vertically despite there being enough space to fit them in original alignment.

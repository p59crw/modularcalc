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
- Add extended math functionality.
- Add docking mode which allows toolbar to be docked and undocked from edges of browser.
- Improve interface styles.

#### How to Use:
- Click calculator buttons to use similar to a Windows or Android calculator. Results are displayed in the top display bar.
- Select and hold the center of an element without dragging to delete it.
- Select and hold an element while dragging to move it.
- Hold an edge of an element and drag to resize the element in that direction.
- Click "Snap On" to toggle Snap Mode on and off. When on, elements will snap to the outer edges of other elements. When off, elements will drag smoothly without catching to any edges.

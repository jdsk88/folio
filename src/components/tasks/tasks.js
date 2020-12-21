import React, { useState } from "react";

import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse
} from "@material-ui/core";

const myData = [
  {
    id: "1",
    nameHeader: "Header1",
    subMenu: [{ id: "1", name: "subMenu1" }, { id: "2", name: "subMenu2" }]
  },
  {
    id: "2",
    nameHeader: "Header2",
    subMenu: [{ id: "1", name: "subMenu1" }, { id: "2", name: "subMenu2" }]
  },
  {
    id: "3",
    nameHeader: "Header3",
    subMenu: [{ id: "1", name: "subMenu1" }, { id: "2", name: "subMenu2" }]
  }
];

const CollapseBTN = () => {
  const [state, setState] = useState({ settings: [{ id: "1", open: false }, { id: "2", open: false }, { id: "3", open: false }] });

  const handleClick = id => {
    setState(state => ({
      ...state,
      settings: state.settings.map(item =>
        item.id === id ? { ...item, open: !item.open } : item
      )
    }));
  };

 
    const { settings } = state;
    return (
      <div style={{ marginRight: "15px" }}>
        <List component="nav">
          {myData.map(each => (
            <React.Fragment key={each.id}>
              <ListItem button onClick={() => handleClick(each.id)}>
                <ListItemText inset primary={each.nameHeader} />
                {settings.find(item => item.id === each.id).open
                  ? "expanded"
                  : "collapsed"}
              </ListItem>
              <Divider />
              <Collapse
                in={settings.find(item => item.id === each.id).open}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {each.subMenu.map(subData => (
                    <ListItem key={subData.id} button>
                      <ListItemText inset primary={subData.name} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </div>
    );
  
}
export default CollapseBTN
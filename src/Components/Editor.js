import React from 'react';
import { Editor as TextEditor } from 'react-draft-wysiwyg';
import classes from './Editor.module.css'
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Editor = () => {
  return (
    <div className={classes.wrapperEditor}>
    <TextEditor editorClassName="editor-class editor" />
    </div>
    
  )
}

export default Editor
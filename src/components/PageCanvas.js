import React from 'react';
import { withStyles } from '@material-ui/core';


import _ from 'lodash';
let get = _.get;

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: '100px', 
    paddingRight: '100px',
    verticalAlign: 'top',
    display: 'inline-block', 
    height: '100%',
    width: '100%'
  }
});


function PageCanvas(props){
  console.log('PageCanvas.props', props);

  const {children, ...otherProps } = props;

  console.log('props.classes', props.classes)

  let headerHeight = 0;
  if(get(Meteor, 'settings.public.defaults.prominantHeader', false)){
    headerHeight = 128;
  } else {
    headerHeight = 64;
  }

  if(get(props, 'headerHeight')){
    headerHeight = get(props, 'headerHeight')
  }

  return(
    <div className={ props.classes.root } {...otherProps} style={{ paddingTop: headerHeight + 'px' }}>
      { children }
    </div>
  );
}

export default withStyles(styles)(PageCanvas);
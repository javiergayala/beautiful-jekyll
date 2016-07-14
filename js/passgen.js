'use strict';

var str = '';

function cleanup() // fixes Netscape 4.x bug
{
  document.forms.pform.le.value = 8;
  document.forms.pform.up.checked = true;
  document.forms.pform.lo.checked = true;
  document.forms.pform.dg.checked = true;
  document.forms.pform.pn.checked = true;
  document.forms.pform.ct.value = '';
  document.forms.pform.rm.value = '';
}

function genpwd()
{
  str = '';
  var ch = [];

  for( var i = 0; i < 33; i++ ) {
    ch[ ch.length ] = 0;
  }
  for( ; i < 48; i++ ) {
    ch[ ch.length ] = ( document.forms.pform.pn.checked === true ) ? 1 : 0;
  }
  for( ; i < 58; i++ ) {
    ch[ ch.length ] = ( document.forms.pform.dg.checked === true ) ? 1 : 0;
  }
  for( ; i < 65; i++ ) {
    ch[ ch.length ] = ( document.forms.pform.pn.checked === true ) ? 1 : 0;
  }
  for( ; i < 91; i++ ) {
    ch[ ch.length ] = ( document.forms.pform.up.checked === true ) ? 1 : 0;
  }
  for( ; i < 97; i++ ) {
    ch[ ch.length ] = ( document.forms.pform.pn.checked === true ) ? 1 : 0;
  }
  for( ; i < 123; i++ ) {
    ch[ ch.length ] = ( document.forms.pform.lo.checked === true ) ? 1 : 0;
  }
  for( ; i < 127; i++ ) {
    ch[ ch.length ] = ( document.forms.pform.pn.checked === true ) ? 1 : 0;
  }
  ch[ ch.length ] = 0;

  var c = document.forms.pform.ct.value;
  var r = document.forms.pform.rm.value;

  for( i = 0; i < c.length; i++ ) {
    ch[ c.charCodeAt( i ) ] = 1;
  }
  for( i = 0; i < r.length; i++ ) {
    ch[ r.charCodeAt( i ) ] = 0;
  }

  if( document.forms.pform.le.value < 1 ) {
    document.forms.pform.le.value = 1;
  }
  if( document.forms.pform.le.value > 128 ) {
    document.forms.pform.le.value = 128;
  }

  var count = 0;
  do
  {
    var x = Math.floor( Math.random() * 128 );
    if( ch[ x ] === 1 ) {
      str += String.fromCharCode( x );
    }
    count++;
  } while ( str.length < document.forms.pform.le.value && count < 1024 );
  if( count === 1024 ) {
    alert( 'Random selections exceeded safety limit.\n Try again or use larger selection set.' );
  }
  document.forms.pform.outbox.value = str;
  return true;
}

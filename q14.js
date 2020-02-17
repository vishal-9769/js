let str = prompt('enter String with html and xml tag');
  const removeHTMLXMLTag = str =>
  {
     if ((str===null) || (str===''))
         return false;
    else
     str = str.toString();
    return str.replace(/<[^>]*>/g, '');
  }
  removeHTMLXMLTag(str)
 // console.log(removeHTMLXMLTag(""));
  document.write("simple String: "+str);
  
  
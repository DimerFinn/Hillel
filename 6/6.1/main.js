function replace_string(string, pattern){

    var st_pt = pattern.join('');
   
    return string.replace(new RegExp(`[${st_pt}]`, 'gi'), '')
   
   }
   
   alert(replace_string('Hello World', ['l', 'd']))
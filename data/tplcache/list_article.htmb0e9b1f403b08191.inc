<?php
$z[0]=Array("field","",254,273);
$z[0][4]['name']="title";
$z[1]=Array("global","",274,300);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",341,370);
$z[2][4]['name']="keywords";
$z[3]=Array("field","",410,468);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("include","",1115,1150);
$z[4][4]['filename']="head.htm";
$z[5]=Array("channel","\r\n        <li onClick=\"location.href='[field:typeurl/]';\">\r\n          <div class=\"navmborder\"></div>\r\n          <div id=\"navmtext\">\r\n            <h2> <a title=\"[field:typename/]\" href=\"[field:typeurl/]\">[field:typename/]</a></h2>\r\n          </div>\r\n        </li>\r\n        ",1614,1917);
$z[6]=Array("field","",2025,2047);
$z[6][4]['name']="typename";
$z[7]=Array("list","\r\n      <ul class=\"newsrctera\">\r\n        <li class=\"ddlt80\"><a href=\"[field:arcurl/]\" target=\"_blank\">[field:title/]</a></li>\r\n        <li class=\"ddlt20\"> [field:pubdate  function=strftime('%Y-%m-%d',@me)/]</li>\r\n      </ul>\r\n      ",2135,2404);
$z[7][4]['pagesize']="10";
$z[8]=Array("pagelist","",3274,3327);
$z[8][4]['listitem']="index,end,pre,next,pageno";
$z[9]=Array("include","",3485,3522);
$z[9][4]['filename']="footer.htm";

?>
<?php
$z[0]=Array("global","",731,757);
$z[0][4]['name']="cfg_webname";
$z[1]=Array("global","",801,831);
$z[1][4]['name']="cfg_description";
$z[2]=Array("global","",868,895);
$z[2][4]['name']="cfg_keywords";
$z[3]=Array("include","",1699,1734);
$z[3][4]['filename']="head.htm";
$z[4]=Array("channelartlist","\r\n        <ul  class=\"nestlist\">\r\n          <p>{dede:field name='typename'/}</p>\r\n          {dede:arclist    limit='0,1'}\r\n          <li><img src=\"[field:litpic/]\" width=\"162\" height=\"162\"></li>\r\n          <li>[field:description/]...   \r\n          {/dede:arclist}\r\n            <div id=\"newsbtn\"><a href=\"{dede:field name='typeurl'/}\">查看更多&gt;&gt;</a></div>\r\n          </li>\r\n        </ul>\r\n        ",2097,2582);
$z[4][4]['row']="12";
$z[4][4]['typeid']="12,13,14,15,16,17";
$z[5]=Array("arclist","\r\n       <a title=\"[field:title/]\" target=\"_blank\" href=\"[field:arcurl/]\"><img src=\"[field:litpic/]\" alt=\"[field:title/]\" /></a> \r\n       ",4096,4295);
$z[5][4]['typeid']="7";
$z[5][4]['limit']="0,5";
$z[5][4]['flag']="f";
$z[6]=Array("arclist","\r\n        <li> <span class=\"newstime\">[field:pubdate  function=strftime('%Y-%m-%d',@me)/]</span><a href=\"[field:arcurl/]\" title=\"[field:title/]\" target=\"_blank\">[field:title/]</a> </li>\r\n        ",4344,4591);
$z[6][4]['typeid']="7";
$z[6][4]['limit']="0,5";
$z[7]=Array("include","",4681,4718);
$z[7][4]['filename']="footer.htm";

?>
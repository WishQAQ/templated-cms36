<li class="mainlevel"> <a href="{dede:field name='typeurl'/}"><span id="cnf">{dede:field name='typename'/}</span><br/>
      <span id=enf>{dede:global name=itemindex runphp='yes'}if(@me==1){@me='ABOUT'; }if(@me==2){@me='DYNAMIC'; } if(@me==3){@me='INDUSTRY'; }if(@me==4){@me='HENGQIN'; } if(@me==5){@me='HR'; }if(@me==6){@me='CONTACT US'; }{/dede:global}</span> </a>
      <ul>
        {dede:channel type='son' noself='yes' }
        <li><a href="[field:typelink/]">[field:typename/]</a></li>
        {/dede:channel}
      </ul>
    </li>
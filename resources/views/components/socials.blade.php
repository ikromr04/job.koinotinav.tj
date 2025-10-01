@props(['class' => ''])

<ul class="{{ $class ? "$class " : '' }}socials">
  <li class="socials__item">
    <a class="socials__link" href="https://www.linkedin.com/company/koinoti-nav/" target="_blank">
      <svg class="socials__icon" width="26" height="26">
        <use xlink:href="#linkedin" />
      </svg>
    </a>
  </li>
  <li class="socials__item">
    <a class="socials__link" href="https://www.facebook.com/share/1DQabZvr3M/?mibextid=wwXIfr" target="_blank">
      <svg class="socials__icon" width="10" height="20">
        <use xlink:href="#facebook" />
      </svg>
    </a>
  </li>
  <li class="socials__item">
    <a class="socials__link" href="https://www.instagram.com/koinotinav?igsh=bXBzcDFrbG10ejNs" target="_blank">
      <svg class="socials__icon" width="23" height="23">
        <use xlink:href="#instagram" />
      </svg>
    </a>
  </li>
</ul>

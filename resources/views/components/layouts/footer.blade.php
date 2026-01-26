<div class="container relative z-10 mt-auto">
  <button class="totop" type="button" onclick="window.scrollTo({ top: 0, behavior: 'smooth'})">
    <span class="sr-only">@lang('Наверх')</span>
    <svg width="29" height="30">
      <use xlink:href="#totop" />
    </svg>
  </button>
</div>

<footer class="footer">
  <div class="footer__container container">
    <div class="footer__left">
      <a class="footer__logo" href="https://koinotinav.tj/" target="_blank">
        <img src="{{ asset('images/logo-koinot.svg') }}" width="258" height="46" alt="@lang('На главную')">
      </a>

      <p class="footer__description">
        @lang('Нам доступно множество вариантов отрывков, но большинство из них подверглись изменению в той или иной форме путем инъекций.')
      </p>

      <ul class="footer__nav">
        <li class="footer__navitem">
          <a class="footer__navlink" href="{{ route('pages.index') }}">
            @lang('Главная')
          </a>
        </li>
        <li class="footer__navitem">
          <a class="footer__navlink" href="{{ route('pages.team') }}">
            @lang('Наш тим')
          </a>
        </li>
      </ul>

      <dl class="footer__address">
        <div class="footer__address-item">
          <dt>@lang('Адрес')</dt>
          <dd>
            <span>
              <svg width="17" height="16">
                <use xlink:href="#call" />
              </svg>
            </span>
            @lang('Душанбе, Таджикистан')
          </dd>
        </div>
        <div class="footer__address-item">
          <dt>@lang('Электронная почта')</dt>
          <dd>
            <a href="mailto:info@koinotinav.tj">
              <span>
                <svg width="17" height="12">
                  <use xlink:href="#mail" />
                </svg>
              </span>
              info@koinotinav.tj
            </a>
          </dd>
        </div>
        <div class="footer__address-item">
          <dt>@lang('Телеграмм')</dt>
          <dd>
            <a href="https://t.me/hrkoinotinav" target="_blank">
              @hrkoinotinav
            </a>
          </dd>
        </div>
      </dl>
    </div>

    <dl class="footer__links">
      <div class="footer__links-item">
        <dt>@lang('Меню')</dt>
        <dd>
          <a href="/">
            @lang('Главная')
          </a>
          <a href="#">
            @lang('Категории')
          </a>
          <a href="#" target="_blank">
            @lang('Карьерный рост')
          </a>
          <a href="{{ route('pages.resume') }}">
            @lang('Резюме')
          </a>
        </dd>
      </div>

      <div class="footer__links-item">
        <dt>@lang('О нас')</dt>
        <dd>
          <a href="">
            @lang('История')
          </a>
          <a class="min-w-max" href="">
            @lang('Миссия, Видение, Ценности')
          </a>
          <a href="">
            @lang('Новости')
          </a>
        </dd>
      </div>

      <div class="footer__links-item">
        <dt>@lang('Полезные ссылки')</dt>
        <dd>
          <a href="">
            @lang('Компании')
          </a>
          <a href="">
            @lang('Вклад в общество')
          </a>
          <a href="">
            @lang('Карьера')
          </a>
        </dd>
      </div>

      <div class="footer__links-item">
        <dt>@lang('Поддержка')</dt>
        <dd>
          <a href="">
            @lang('FAQ')
          </a>
        </dd>
      </div>
    </dl>
  </div>

  <div class="footer__line"></div>

  <div class="footer__bottom container">
    <p>
      © {{ date('Y') }} Copyright <span>Koinoti Nav</span>
    </p>
    <p>
      @lang('Все права защищены')
    </p>

    <x-socials class="footer__socials" />
  </div>
</footer>

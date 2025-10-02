<footer class="footer">
  <div class="footer__container container">
    <div>
      <a class="footer__logo" href="{{ route('pages.index') }}">
        <img src="{{ asset('images/logo.svg') }}" width="215" height="26" alt="@lang('На главную')">
      </a>

      <a class="footer__logo-koinot" href="https://koinotinav.tj/">
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
          <dd>@lang('Душанбе, Таджикистан')</dd>
        </div>
        <div class="footer__address-item">
          <dt>@lang('Номер Телефона')</dt>
          <dd>
            <a href="tel:+992551515151">
              +992 551515151
            </a>
          </dd>
        </div>
        <div class="footer__address-item">
          <dt>@lang('Электронная почта')</dt>
          <dd>
            <a href="mailto:info@koinotinav.tj">
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
        <dt>@lang('Наши Компании')</dt>
        <dd>
          <a href="https://evolet.tj/" target="_blank">
            @lang('Эволет')
          </a>
          <a href="https://ats.tj/" target="_blank">
            @lang('АтС')
          </a>
          <a href="https://atsgen.tj/" target="_blank">
            @lang('АтС Джен')
          </a>
          <a href="https://vegapharm.tj/" target="_blank">
            @lang('Вегафарм')
          </a>
          <a href="http://tajmotors.tj/" target="_blank">
            @lang('Tajmotors')
          </a>
          <a href="https://www.byd.tj/" target="_blank">
            @lang('BYD')
          </a>
        </dd>
      </div>

      <div class="footer__links-item">
        <dt>@lang('Поддержка')</dt>
        <dd>
          <ul>
            <li>
              <a href="">
                @lang('Контакты')
              </a>
            </li>
            <li>
              <a href="">
                @lang('FAQ')
              </a>
            </li>
          </ul>
        </dd>
      </div>

      <div class="footer__links-item">
        <dt>@lang('Регистрация')</dt>
        <dd>
          <p>
            @lang('Подпишитесь на нашу рассылку, чтобы быть в курсе последних обновлений и новостей')
          </p>
          <form>
            <label>
              <span class="sr-only">@lang('Ваш E-mail')</span>
              <input type="email" placeholder="@lang('Ваш E-mail')">
            </label>

            <button type="submit">
              @lang('Отправить')
            </button>
          </form>
        </dd>
      </div>
    </dl>
  </div>

  <hr>

  <div class="container">
    <p>
      © {{ date('Y') }} Copyright <span>Koinoti Nav</span>
    </p>
    <p>
      @lang('Все права защищены')
    </p>

    <x-socials class="footer__socials" />
  </div>
</footer>

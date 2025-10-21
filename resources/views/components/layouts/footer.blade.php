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
          <dt>@lang('Номер Телефона')</dt>
          <dd>
            <a href="tel:+992551515151">
              <span>
                <svg width="13" height="16">
                  <use xlink:href="#location" />
                </svg>
              </span>
              +992 551515151
            </a>
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
          <a href="">
            @lang('Контакты')
          </a>
          <a href="">
            @lang('FAQ')
          </a>
        </dd>
      </div>

      <div class="footer__links-item">
        <dt>@lang('Регистрация')</dt>
        <dd>
          <p class="footer__subscribe">
            @lang('Подпишитесь на нашу рассылку, чтобы быть в курсе последних обновлений и новостей')
          </p>
          <form class="footer__form">
            <label>
              <span class="sr-only">@lang('Ваш E-mail')</span>
              <input name="email" type="email" placeholder="@lang('Ваш E-mail')" required>
            </label>

            <button class="group justify-center items-center cursor-pointer" type="submit">
              <span class="group-[.submitting]:hidden group-[.success]:hidden">@lang('Отправить')</span>
              <svg aria-hidden="true" class="hidden group-[.submitting]:inline w-6 h-6 text-white animate-spin dark:text-gray-400 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <svg class="hidden group-[.success]:inline w-7 h-7 text-green-300" xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 36 36">
                <path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14" />
                <path fill="currentColor" d="M28 12.1a1 1 0 0 0-1.41 0l-11.1 11.05-6-6A1 1 0 0 0 8 18.53L15.49 26 28 13.52a1 1 0 0 0 0-1.42" />
                <path fill="none" d="M0 0h36v36H0z" />
              </svg>
            </button>
          </form>
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

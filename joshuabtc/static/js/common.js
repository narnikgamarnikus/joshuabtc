$(function() {

  if ($.validator) {

    // $.extend($.validator.messages, {
    //   required: "Необходимо заполнить.",
    //   remote: "Пожалуйста, введите правильное значение.",
    //   email: "Пожалуйста, введите корректный Email.",
    //   url: "Пожалуйста, введите корректный URL.",
    //   date: "Пожалуйста, введите корректную дату.",
    //   dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
    //   number: "Пожалуйста, введите число.",
    //   digits: "Пожалуйста, вводите только цифры.",
    //   creditcard: "Пожалуйста, введите правильный номер карты.",
    //   equalTo: "Пожалуйста, введите такое же значение ещё раз.",
    //   accept: "Пожалуйста, выберите файл с правильным расширением.",
    //   maxlength: $.validator.format("Пожалуйста, введите не больше {0} символов."),
    //   minlength: $.validator.format("Пожалуйста, введите не меньше {0} символов."),
    //   rangelength: $.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
    //   range: $.validator.format("Пожалуйста, введите число от {0} до {1}."),
    //   max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
    //   min: $.validator.format("Пожалуйста, введите число, большее или равное {0}.")
    // });

    // tmp = {"actions":{"accept_terms":"Соласен с ","buy":"Оплатить","change_password":"Сменить пароль","confirm_phone":"2) Подтвердить","drop_password":"Сменить пароль","enter":"Войти","get_sms":"1) Получить СМС с кодом","not_usa":"Я не гражданин США","remember":"Запомнить","save":"Сохранить","sent":"Отправить","sign_up":"Зарегистрироваться"},"active_admin":{"access_denied":{"message":"Вы не авторизованы для выполнения данного действия."},"any":"Любой","batch_actions":{"action_label":"%{title} выбранное","button_label":"Групповые операции","default_confirmation":"Вы уверены, что вы хотите это сделать?","delete_confirmation":"Вы уверены, что хотите удалить %{plural_model}?","labels":{"destroy":"Удалить"},"selection_toggle_explanation":"(Отметить всё / Снять выделение)","succesfully_destroyed":{"few":"Успешно удалено: %{count} %{plural_model}","many":"Успешно удалено: %{count} %{plural_model}","one":"Успешно удалено: 1 %{model}","other":"Успешно удалено: %{count} %{plural_model}"}},"blank_slate":{"content":"Пока нет %{resource_name}.","link":"Создать"},"cancel":"Отмена","comments":{"add":"Добавить Комментарий","author":"Автор","author_missing":"Аноним","author_type":"Тип автора","body":"Текст","created_at":"Дата создания","delete":"Удалить Комментарий","delete_confirmation":"Вы уверены, что хотите удалить этот комментарий?","errors":{"empty_text":"Комментарий не сохранен, текст не должен быть пустым."},"no_comments_yet":"Пока нет комментариев.","resource":"Ресурс","resource_type":"Тип ресурса","title_content":"Комментарии (%{count})"},"dashboard":"Панель управления","dashboard_welcome":{"call_to_action":"Чтобы добавить сюда что-нибудь загляните в 'app/admin/dashboard.rb'","welcome":"Добро пожаловать в Active Admin. Это стандартная страница управления сайтом."},"delete":"Удалить","delete_confirmation":"Вы уверены, что хотите удалить это?","delete_model":"Удалить %{model}","details":"%{model} подробнее","devise":{"change_password":{"submit":"Изменение пароля","title":"Изменение пароля"},"email":{"title":"Эл. почта"},"links":{"forgot_your_password":"Забыли пароль?","resend_confirmation_instructions":"Повторная отправка инструкций подтверждения","resend_unlock_instructions":"Повторная отправка инструкций разблокировки","sign_in":"Войти","sign_in_with_omniauth_provider":"Войти с помощью %{provider}","sign_up":"Зарегистрироваться"},"login":{"remember_me":"Запомнить меня","submit":"Войти","title":"Войти"},"password":{"title":"Пароль"},"resend_confirmation_instructions":{"submit":"Выслать повторно письмо с активацией","title":"Выслать повторно письмо с активацией"},"reset_password":{"submit":"Сбросить пароль","title":"Забыли пароль?"},"sign_up":{"submit":"Зарегистрироваться","title":"Зарегистрироваться"},"subdomain":{"title":"Поддомен"},"unlock":{"submit":"Повторно отправить инструкции по разблокировке","title":"Повторно отправить инструкции по разблокировке"},"username":{"title":"Имя пользователя"}},"download":"Загрузка:","dropdown_actions":{"button_label":"Oперации"},"edit":"Изменить","edit_model":"Изменить %{model}","empty":"Пусто","filters":{"buttons":{"clear":"Очистить","filter":"Фильтровать"},"predicates":{"contains":"Содержит","ends_with":"Заканчивается","equals":"Равно","greater_than":"больше","less_than":"меньше","starts_with":"Начинается с"}},"has_many_delete":"Удалить","has_many_new":"Добавить %{model}","has_many_remove":"Убрать","index_list":{"block":"Список","blog":"Блог","grid":"Сетка","table":"Таблица"},"logout":"Выйти","main_content":"Создайте %{model}#main_content для отображения содержимого.","new_model":"Создать %{model}","next":"След.","pagination":{"empty":"%{model} не найдено","entry":{"few":"записи","many":"записей","one":"запись","other":"записей"},"multiple":"Результат: %{model} \u003cb\u003e%{from}\u0026nbsp;-\u0026nbsp;%{to}\u003c/b\u003e из \u003cb\u003e%{total}\u003c/b\u003e","multiple_without_total":"Результат: %{model} \u003cb\u003e%{from}\u0026nbsp;-\u0026nbsp;%{to}\u003c/b\u003e","one":"Результат: \u003cb\u003e1\u003c/b\u003e %{model}","one_page":"Результат: \u003cb\u003e%{n}\u003c/b\u003e %{model}"},"powered_by":"Работает на %{active_admin} %{version}","previous":"Пред.","search_status":{"current_filters":"Текущий фильтр:","current_scope":"Область:","headline":"Статус поиска:","no_current_filters":"Ни один"},"sidebars":{"filters":"Фильтры","search_status":"Статус поиска"},"status_tag":{"no":"Нет","yes":"Да"},"unsupported_browser":{"headline":"Пожалуйста, обратите внимание, что Active Admin больше не поддерживает старые версии Internet Explorer начиная с версии IE 8","recommendation":"Мы рекомендуем обновить версию вашего браузера (\u003ca href=\"http://windows.microsoft.com/ie\"\u003eInternet Explorer\u003c/a\u003e, \u003ca href=\"https://chrome.google.com/\"\u003eGoogle Chrome\u003c/a\u003e, или \u003ca href=\"https://mozilla.org/firefox/\"\u003eFirefox\u003c/a\u003e).","turn_off_compatibility_view":"Если вы используете IE 9 или новее, убедитесь, что \u003ca href=\"https://support.microsoft.com/ru-ru/help/17471\"\u003eвы выключили опцию \"Просмотр в режиме совместимости\"\u003c/a\u003e."},"view":"Открыть"},"activemodel":{"attributes":{"order_form":{"adress":"Адрес","card_number":"Номер карты","city":"Город","country":"Страна","cvv2":"CVC/CCV код","expiry_date":"Срок действия","first_name":"Имя","last_name":"Фамилия","phone":"Телефон","region":"Область / Штат / Провинция","zip_code":"Почтовый индекс"}}},"activerecord":{"attributes":{"address":{"address":"Адрес","city":"Город","country":"Страна","region":"Область / Штат / Провинция","utility_bill_photo":"Подтверждающий документ","zip_code":"Почтовый индекс"},"payment_card":{"photos":"Подтверждающий документ"},"profile":{"document_photo":"Подтверждающий документ","first_name":"Имя","last_name":"Фамилия","phone":"Телефон"},"user":{"current_password":"Старый пароль","email":"Email","new_password":"Новый пароль","new_password_confirmation":"Повторите новый пароль","password":"Пароль","password_confirmation":"Повторите пароль","remember_me":"Запомнить меня","reset_password_token":"Ссылка сброса пароля","unlock_token":"Токен разблокировки"}},"errors":{"messages":{"processing_error":"Ошибка оплаты","record_invalid":"Возникли ошибки: %{errors}","restrict_dependent_destroy":{"has_many":"Невозможно удалить запись, так как существуют зависимости: %{record}","has_one":"Невозможно удалить запись, так как существует зависимость: %{record}"}}},"models":{"user":"Пользователь"}},"buy_page":{"adress_title":"Платежный адрес","card_title":"Данные карты","info":"Олатите $1.00 чтобы получить 10 XYZT","title":"Купить токены"},"countries":{"AC":"о-в Вознесения","AD":"Андорра","AE":"ОАЭ","AF":"Афганистан","AG":"Антигуа и Барбуда","AI":"Ангилья","AL":"Албания","AM":"Армения","AN":"Нидерландские Антильские о-ва","AO":"Ангола","AQ":"Антарктида","AR":"Аргентина","AS":"Американское Самоа","AT":"Австрия","AU":"Австралия","AW":"Аруба","AX":"Аландские о-ва","AZ":"Азербайджан","BA":"Босния и Герцеговина","BB":"Барбадос","BD":"Бангладеш","BE":"Бельгия","BF":"Буркина-Фасо","BG":"Болгария","BH":"Бахрейн","BI":"Бурунди","BJ":"Бенин","BL":"Сен-Бартельми","BM":"Бермудские о-ва","BN":"Бруней-Даруссалам","BO":"Боливия","BQ":"Бонэйр, Синт-Эстатиус и Саба","BR":"Бразилия","BS":"Багамские о-ва","BT":"Бутан","BV":"о-в Буве","BW":"Ботсвана","BY":"Беларусь","BZ":"Белиз","CA":"Канада","CC":"Кокосовые о-ва","CD":"Конго - Киншаса","CF":"ЦАР","CG":"Конго - Браззавиль","CH":"Швейцария","CI":"Кот-д’Ивуар","CK":"о-ва Кука","CL":"Чили","CM":"Камерун","CN":"Китай","CO":"Колумбия","CP":"о-в Клиппертон","CR":"Коста-Рика","CU":"Куба","CV":"Кабо-Верде","CW":"Кюрасао","CX":"о-в Рождества","CY":"Кипр","CZ":"Чехия","DE":"Германия","DG":"Диего-Гарсия","DJ":"Джибути","DK":"Дания","DM":"Доминика","DO":"Доминиканская Республика","DZ":"Алжир","EA":"Сеута и Мелилья","EC":"Эквадор","EE":"Эстония","EG":"Египет","EH":"Западная Сахара","ER":"Эритрея","ES":"Испания","ET":"Эфиопия","EU":"Европейский союз","FI":"Финляндия","FJ":"Фиджи","FK":"Фолклендские о-ва","FM":"Федеративные Штаты Микронезии","FO":"Фарерские о-ва","FR":"Франция","GA":"Габон","GB":"Великобритания","GD":"Гренада","GE":"Грузия","GF":"Французская Гвиана","GG":"Гернси","GH":"Гана","GI":"Гибралтар","GL":"Гренландия","GM":"Гамбия","GN":"Гвинея","GP":"Гваделупа","GQ":"Экваториальная Гвинея","GR":"Греция","GS":"Южная Георгия и Южные Сандвичевы о-ва","GT":"Гватемала","GU":"Гуам","GW":"Гвинея-Бисау","GY":"Гайана","HK":"Гонконг (особый район)","HM":"о-ва Херд и Макдональд","HN":"Гондурас","HR":"Хорватия","HT":"Гаити","HU":"Венгрия","IC":"Канарские о-ва","ID":"Индонезия","IE":"Ирландия","IL":"Израиль","IM":"О-в Мэн","IN":"Индия","IO":"Британская территория в Индийском океане","IQ":"Ирак","IR":"Иран","IS":"Исландия","IT":"Италия","JE":"Джерси","JM":"Ямайка","JO":"Иордания","JP":"Япония","KE":"Кения","KG":"Киргизия","KH":"Камбоджа","KI":"Кирибати","KM":"Коморские о-ва","KN":"Сент-Китс и Невис","KP":"КНДР","KR":"Республика Корея","KW":"Кувейт","KY":"Каймановы о-ва","KZ":"Казахстан","LA":"Лаос","LB":"Ливан","LC":"Сент-Люсия","LI":"Лихтенштейн","LK":"Шри-Ланка","LR":"Либерия","LS":"Лесото","LT":"Литва","LU":"Люксембург","LV":"Латвия","LY":"Ливия","MA":"Марокко","MC":"Монако","MD":"Молдова","ME":"Черногория","MF":"Сен-Мартен","MG":"Мадагаскар","MH":"Маршалловы о-ва","MK":"Македония","ML":"Мали","MM":"Мьянма (Бирма)","MN":"Монголия","MO":"Макао (особый район)","MP":"Северные Марианские о-ва","MQ":"Мартиника","MR":"Мавритания","MS":"Монтсеррат","MT":"Мальта","MU":"Маврикий","MV":"Мальдивские о-ва","MW":"Малави","MX":"Мексика","MY":"Малайзия","MZ":"Мозамбик","NA":"Намибия","NC":"Новая Каледония","NE":"Нигер","NF":"о-в Норфолк","NG":"Нигерия","NI":"Никарагуа","NL":"Нидерланды","NO":"Норвегия","NP":"Непал","NR":"Науру","NU":"Ниуэ","NZ":"Новая Зеландия","OM":"Оман","PA":"Панама","PE":"Перу","PF":"Французская Полинезия","PG":"Папуа – Новая Гвинея","PH":"Филиппины","PK":"Пакистан","PL":"Польша","PM":"Сен-Пьер и Микелон","PN":"Питкэрн","PR":"Пуэрто-Рико","PS":"Палестинские территории","PT":"Португалия","PW":"Палау","PY":"Парагвай","QA":"Катар","QO":"Внешняя Океания","RE":"Реюньон","RO":"Румыния","RS":"Сербия","RU":"Россия","RW":"Руанда","SA":"Саудовская Аравия","SB":"Соломоновы о-ва","SC":"Сейшельские о-ва","SD":"Судан","SE":"Швеция","SG":"Сингапур","SH":"О-в Св. Елены","SI":"Словения","SJ":"Шпицберген и Ян-Майен","SK":"Словакия","SL":"Сьерра-Леоне","SM":"Сан-Марино","SN":"Сенегал","SO":"Сомали","SR":"Суринам","SS":"Южный Судан","ST":"Сан-Томе и Принсипи","SV":"Сальвадор","SX":"Синт-Мартен","SY":"Сирия","SZ":"Свазиленд","TA":"Тристан-да-Кунья","TC":"О-ва Тёркс и Кайкос","TD":"Чад","TF":"Французские Южные Территории","TG":"Того","TH":"Таиланд","TJ":"Таджикистан","TK":"Токелау","TL":"Восточный Тимор","TM":"Туркменистан","TN":"Тунис","TO":"Тонга","TR":"Турция","TT":"Тринидад и Тобаго","TV":"Тувалу","TW":"Тайвань","TZ":"Танзания","UA":"Украина","UG":"Уганда","UM":"Внешние малые о-ва (США)","US":"Соединенные Штаты","UY":"Уругвай","UZ":"Узбекистан","VA":"Ватикан","VC":"Сент-Винсент и Гренадины","VE":"Венесуэла","VG":"Виргинские о-ва (Британские)","VI":"Виргинские о-ва (США)","VN":"Вьетнам","VU":"Вануату","WF":"Уоллис и Футуна","WS":"Самоа","XK":"Косово","YE":"Йемен","YT":"Майотта","ZA":"ЮАР","ZM":"Замбия","ZW":"Зимбабве","ZZ":"Неизвестный регион"},"date":{"abbr_day_names":["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],"abbr_month_names":[null,"янв.","февр.","марта","апр.","мая","июня","июля","авг.","сент.","окт.","нояб.","дек."],"day_names":["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],"formats":{"default":"%d.%m.%Y","long":"%-d %B %Y","short":"%-d %b"},"month_names":[null,"января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],"order":["day","month","year"]},"datetime":{"distance_in_words":{"about_x_hours":{"few":"около %{count} часов","many":"около %{count} часов","one":"около %{count} часа","other":"около %{count} часа"},"about_x_months":{"few":"около %{count} месяцев","many":"около %{count} месяцев","one":"около %{count} месяца","other":"около %{count} месяца"},"about_x_years":{"few":"около %{count} лет","many":"около %{count} лет","one":"около %{count} года","other":"около %{count} лет"},"almost_x_years":{"few":"почти %{count} года","many":"почти %{count} лет","one":"почти 1 год","other":"почти %{count} лет"},"half_a_minute":"меньше минуты","less_than_x_minutes":{"few":"меньше %{count} минут","many":"меньше %{count} минут","one":"меньше %{count} минуты","other":"меньше %{count} минуты"},"less_than_x_seconds":{"few":"меньше %{count} секунд","many":"меньше %{count} секунд","one":"меньше %{count} секунды","other":"меньше %{count} секунды"},"over_x_years":{"few":"больше %{count} лет","many":"больше %{count} лет","one":"больше %{count} года","other":"больше %{count} лет"},"x_days":{"few":"%{count} дня","many":"%{count} дней","one":"%{count} день","other":"%{count} дня"},"x_minutes":{"few":"%{count} минуты","many":"%{count} минут","one":"%{count} минуту","other":"%{count} минуты"},"x_months":{"few":"%{count} месяца","many":"%{count} месяцев","one":"%{count} месяц","other":"%{count} месяца"},"x_seconds":{"few":"%{count} секунды","many":"%{count} секунд","one":"%{count} секунду","other":"%{count} секунды"},"x_years":{"few":"%{count} года","many":"%{count} лет","one":"%{count} год","other":"%{count} года"}},"prompts":{"day":"День","hour":"Часов","minute":"Минут","month":"Месяц","second":"Секунд","year":"Год"}},"devise":{"confirmations":{"confirmed":"Ваш адрес эл. почты успешно подтвержден.","new":{"resend_confirmation_instructions":"Выслать повторно письмо с активацией"},"send_instructions":"В течение нескольких минут вы получите письмо с инструкциями по подтверждению адреса эл. почты.","send_paranoid_instructions":"Если ваш адрес эл. почты есть в системе, то в течение нескольких минут вы получите письмо с инструкциями по его подтверждению."},"failure":{"already_authenticated":"Вы уже вошли в систему.","inactive":"Ваша учетная запись еще не активирована.","invalid":"Неверный адрес эл. почты или пароль.","last_attempt":"У вас осталась последняя попытка ввода пароля до блокировки учетной записи.","locked":"Ваша учетная запись заблокирована.","not_found_in_database":"Неверный адрес эл. почты или пароль.","timeout":"Ваш сеанс закончился. Пожалуйста, войдите в систему снова.","unauthenticated":"Вам необходимо войти в систему или зарегистрироваться.","unconfirmed":"Вы должны подтвердить вашу учетную запись."},"mailer":{"confirmation_instructions":{"action":"Активировать","greeting":"Здравствуйте, %{recipient} !","instruction":"Вы можете активировать свою учетную запись, нажав ссылку снизу:","subject":"Инструкции по подтверждению учетной записи"},"password_change":{"greeting":"Приветствуем, %{recipient}!","message":"Мы пытаемся связаться с вами, что бы сообщить, что ваш пароль был изменен.","subject":"Пароль изменен"},"reset_password_instructions":{"action":"Изменить пароль","greeting":"Здравствуйте, %{recipient}!","instruction":"Вы (или кто-то еще) запросили изменение пароля. Для изменения пароля нажмите ссылку ниже:","instruction_2":"Если вы не запрашивали изменение пароля - проигнорируйте это сообщение","instruction_3":"Ваш пароль не изменится пока вы не нажмете на ссылку и не введете новый.","subject":"Инструкции по восстановлению пароля"},"unlock_instructions":{"action":"Разблокировать учетную запись","greeting":"Здравствуйте, %{recipient}!","instruction":"Нажмите ссылку для активации учетной записи:","message":"Ваша учетная запись была заблокирована в связи с превышением лимита неудачных попыток входа.","subject":"Инструкции по разблокировке учетной записи"}},"omniauth_callbacks":{"failure":"Вы не можете войти в систему с учетной записью из %{kind}, т.к. \"%{reason}\".","success":"Вход в систему выполнен с учетной записью из %{kind}."},"passwords":{"edit":{"change_my_password":"Изменить мой пароль","change_your_password":"Изменить пароль","confirm_new_password":"Повторите новый пароль","new_password":"Новый пароль"},"new":{"forgot_your_password":"Забыли пароль?","send_me_reset_password_instructions":"Выслать новый пароль"},"no_token":"Доступ к этой странице возможен только по ссылке из письма о восстановлении пароля. Если вы пришли по такой ссылке, пожалуйста, убедитесь, что Вы скопировали всю ссылку целиком.","send_instructions":"В течение нескольких минут вы получите письмо с инструкциями по восстановлению пароля.","send_paranoid_instructions":"Если ваш адрес эл. почты есть в системе, то в течение нескольких минут вы получите письмо с инструкциями по восстановлению пароля.","updated":"Ваш пароль изменен. Теперь вы вошли в систему.","updated_not_active":"Ваш пароль изменен."},"registrations":{"destroyed":"До свидания! Ваша учетная запись удалена. Надеемся снова увидеть вас.","edit":{"are_you_sure":"Вы уверены?","cancel_my_account":"Удалить учетную запись","currently_waiting_confirmation_for_email":"Ожидается подтверждение адреса E-mail: %{email}","leave_blank_if_you_don_t_want_to_change_it":"оставьте поле пустым, если не хотите его менять","title":"Редактировать %{resource}","unhappy":"Разочарованы","update":"Обновить","we_need_your_current_password_to_confirm_your_changes":"введите текущий пароль для подтверждения изменений"},"new":{"sign_up":"Регистрация"},"signed_up":"Добро пожаловать! Вы успешно зарегистрировались.","signed_up_but_inactive":"Вы успешно зарегистрированы. Однако, вы не можете войти в систему, потому что ваша учетная запись не активирована.","signed_up_but_locked":"Вы успешно зарегистрированы. Однако, вы не можете войти в систему, потому что ваша учетная запись заблокирована.","signed_up_but_unconfirmed":"Письмо со ссылкой для подтверждения было отправлено на ваш адрес эл. почты. Пожалуйста, перейдите по ссылке, чтобы подтвердить учетную запись.","update_needs_confirmation":"Вы успешно обновили данные учетной записи, но необходимо подтвердить новый адрес эл. почты. Пожалуйста, проверьте почтовый ящик и перейдите по ссылке, чтобы закончить процедуру проверки нового адреса эл. почты.","updated":"Ваша учетная запись изменена."},"sessions":{"already_signed_out":"Выход из системы уже выполнен.","new":{"sign_in":"Войти"},"signed_in":"Вход в систему выполнен.","signed_out":"Выход из системы выполнен."},"shared":{"links":{"back":"Назад","didn_t_receive_confirmation_instructions":"Не получили подтверждение?","didn_t_receive_unlock_instructions":"Не получили код разблокировки?","forgot_your_password":"Забыли пароль?","sign_in":"Войти","sign_in_with_provider":"Войти с помощью: %{provider}","sign_up":"Регистрация"}},"unlocks":{"new":{"resend_unlock_instructions":"Выслать подтверждение заново"},"send_instructions":"В течение нескольких минут вы получите письмо с инструкциями по разблокировке учетной записи.","send_paranoid_instructions":"Если ваша учетная запись существует, то в течение нескольких минут вы получите письмо с инструкциями по ее разблокировке.","unlocked":"Ваша учетная запись разблокирована. Теперь вы можете войти в систему."}},"drop_password_page":{"remember_pass":"Вспомнили пароль?","sub_title":"Инструкция по смене пароля будет отправлена на Email","title":"Смена пароля"},"errors":{"format":"%{attribute} %{message}","messages":{"accepted":"нужно подтвердить","already_confirmed":"уже подтверждён. Пожалуйста, попробуйте войти в систему","blank":"не может быть пустым","confirmation":"не совпадает со значением поля %{attribute}","confirmation_period_expired":"должен быть подтвержден в течение %{period}, пожалуйста, повторите запрос на подтверждение","empty":"не может быть пустым","equal_to":"может иметь лишь значение, равное %{count}","even":"может иметь лишь нечетное значение","exclusion":"имеет зарезервированное значение","expired":"устарела. Пожалуйста, запросите новую","greater_than":"может иметь значение большее %{count}","greater_than_or_equal_to":"может иметь значение большее или равное %{count}","inclusion":"имеет непредусмотренное значение","invalid":"имеет неверное значение","less_than":"может иметь значение меньшее чем %{count}","less_than_or_equal_to":"может иметь значение меньшее или равное %{count}","model_invalid":"Возникли ошибки: %{errors}","not_a_number":"не является числом","not_an_integer":"не является целым числом","not_found":"не найден","not_locked":"не заблокирован","not_saved":{"few":"%{resource}: сохранение не удалось из-за %{count} ошибок:","many":"%{resource}: сохранение не удалось из-за %{count} ошибок:","one":"%{resource}: сохранение не удалось из-за %{count} ошибки:","other":"%{resource}: сохранение не удалось из-за %{count} ошибки:"},"odd":"может иметь лишь четное значение","other_than":"должно отличаться от %{count}","present":"нужно оставить пустым","required":"не может отсутствовать","taken":"уже существует","too_long":{"few":"слишком большой длины (не может быть больше чем %{count} символа)","many":"слишком большой длины (не может быть больше чем %{count} символов)","one":"слишком большой длины (не может быть больше чем %{count} символ)","other":"слишком большой длины (не может быть больше чем %{count} символа)"},"too_short":{"few":"недостаточной длины (не может быть меньше %{count} символов)","many":"недостаточной длины (не может быть меньше %{count} символов)","one":"недостаточной длины (не может быть меньше %{count} символа)","other":"недостаточной длины (не может быть меньше %{count} символа)"},"wrong_length":{"few":"неверной длины (может быть длиной ровно %{count} символа)","many":"неверной длины (может быть длиной ровно %{count} символов)","one":"неверной длины (может быть длиной ровно %{count} символ)","other":"неверной длины (может быть длиной ровно %{count} символа)"}},"template":{"body":"Проблемы возникли со следующими полями:","header":{"few":"%{model}: сохранение не удалось из-за %{count} ошибок","many":"%{model}: сохранение не удалось из-за %{count} ошибок","one":"%{model}: сохранение не удалось из-за %{count} ошибки","other":"%{model}: сохранение не удалось из-за %{count} ошибки"}}},"helpers":{"select":{"prompt":"Выберите: "},"submit":{"create":"Создать %{model}","submit":"Сохранить %{model}","update":"Сохранить %{model}"}},"i18n":{"plural":{"keys":["one","few","many","other"],"rule":{}},"transliterate":{"rule":{}}},"login_page":{"forget_pass":"Забыли пароль?","no_account":"Нет аккаунта?","sign_up":"Зарегистрироваться","socials_title":"или с помощью","title":"Вход в личный кабинет ICO XYZ"},"messages":{"change_password":{"fail":"Не удалось изменить пароль","success":"Пароль успешно изменен"},"payment":{"fail":"Не удалось провести платеж","success":"Платеж принят"},"phone":{"fail":"Номер телефона подтвержден","success":"СМС отправлено. Используйте полученный код для подтверждения."},"save":{"fail":"Не удалось сохранить","success":"Данные успешно сохранены"},"verification":{"fail":"Не удалось отправить данные","success":"Данные отправлены и будут в скором времени проверены. Спасибо."}},"navigation":{"buy_tokens":"Купить токены","current_balance":"Баланс","locale":"Русский","logout":"Выйти","main_menu":"Основное меню","my_profile":"Мой профиль","verification":"Верификация"},"new_password_page":{"sub_title":"Ваш пароль был сброшен, задайте новый.","title":"Изменение пароля"},"number":{"currency":{"format":{"delimiter":" ","format":"%n %u","precision":2,"separator":",","significant":false,"strip_insignificant_zeros":false,"unit":"руб."}},"format":{"delimiter":" ","precision":3,"separator":",","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":{"few":"миллиардов","many":"миллиардов","one":"миллиард","other":"миллиардов"},"million":{"few":"миллионов","many":"миллионов","one":"миллион","other":"миллионов"},"quadrillion":{"few":"квадриллионов","many":"квадриллионов","one":"квадриллион","other":"квадриллионов"},"thousand":{"few":"тысяч","many":"тысяч","one":"тысяча","other":"тысяч"},"trillion":{"few":"триллионов","many":"триллионов","one":"триллион","other":"триллионов"},"unit":""}},"format":{"delimiter":"","precision":1,"significant":false,"strip_insignificant_zeros":false},"storage_units":{"format":"%n %u","units":{"byte":{"few":"байта","many":"байт","one":"байт","other":"байта"},"gb":"ГБ","kb":"КБ","mb":"МБ","tb":"ТБ"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"placeholder":{"address":{"address":"Улица, дом, квартира","city":"Москва","country":"Выберете страну...","region":"Москва","zip_code":"123123"},"order_form":{"expiry_date":"ММ / ГГ"},"profile":{"first_name":"Иван","last_name":"Иванов"}},"profile_page":{"change_password":"Сменить пароль","title":"Личная информация"},"sign_up_page":{"have_account":"Уже есть аккаунт?","terms":"условиями использования","title":"Регистрация в ICO XYZ"},"support":{"array":{"last_word_connector":" и ","two_words_connector":" и ","words_connector":", "}},"time":{"am":"утра","formats":{"default":"%a, %d %b %Y, %H:%M:%S %z","long":"%d %B %Y, %H:%M","short":"%d %b, %H:%M"},"pm":"вечера"},"validation_messages":{"accept":"Пожалуйста, выберите файл с правильным расширением.","card":{"card_number":"Укажите действительный номер карты.","cvv2":"Неверный CVC/CCV код.","expiry_date":"Неверная дата истечения срока действия."},"creditcard":"Пожалуйста, введите правильный номер карты.","date":"Пожалуйста, введите корректную дату.","dateISO":"Пожалуйста, введите корректную дату в формате ISO.","digits":"Пожалуйста, вводите только цифры.","email":"Пожалуйста, введите корректный Email.","equalTo":"Пожалуйста, введите такое же значение ещё раз.","login":{"email":"Введите Email","password":"Введите пароль"},"max":"Пожалуйста, введите число, меньшее или равное {0}.","maxlength":"Пожалуйста, введите не больше {0} символов.","min":"Пожалуйста, введите число, большее или равное {0}.","minlength":"Пожалуйста, введите не меньше {0} символов.","number":"Пожалуйста, введите число.","range":"Пожалуйста, введите число от {0} до {1}.","rangelength":"Пожалуйста, введите значение длиной от {0} до {1} символов.","remote":"Пожалуйста, введите правильное значение.","required":"Необходимо заполнить.","sign_up":{"accept_terms":"Необходимо принять условия","password_confirmation":"Повторите пароль","passwords_equal":"Пароли должны совпадать","unavailable_usa":"Недоступно для граждан США"},"url":"Пожалуйста, введите корректный URL."},"verification_page":{"accept_info":"Данные подтверждены","address":{"accept":{"sub_title":"Адрес подтвержден","title":"Адрес проживания"},"not_sent":{"info":"Для подтверждения адреса, пожалуйста, предоставьте фото или сканы документов, приложив их в формате jpg, jpeg, png или pdf. Подойдут следующие счета об оплате: газ, электричество, вода, телефон, интернет. Счет должен быть не старее 3х месяцев и содержать полное имя и адрес.","sub_title":"Заполните форму и загрузите подтверждающий документ","title":"Подтверждение адреса проживания"},"pending":{"title":"Адрес проживания"}},"decline_info":"Отправленный ранее документ был отклонен. Пожалуйста, отправьте другой.","payment_card":{"accept":{"sub_title":"Карта подтверждена","title":"Банковская карта"},"not_sent":{"info":"Пожалуйста, предоставьте фото или сканы документов, приложив их в формате jpg, jpeg, png или pdf.","sub_title":"Загрузите фото/скан карты","title":"Подтверждение владения банковской картой","warning":"Вы должны скрыть первые 12 цифт номера карты на лицевой стороне и CVC/CCV код на обратной стороне."},"pending":{"title":"Банковская карта"}},"pending_info":"Отправленные данные проверяются","phone":{"code":"Код подтверждения","sub_title":"СМС с кодом будет отправлен на указанный номер","title":"Подтверждение номера телефона","warning":"Внимание! Восстановить доступ к аккаунту будет невозможно без подтвержденного номера телефона."},"profile":{"accept":{"sub_title":"Личность подтверждена","title":"Личность"},"not_sent":{"info":"Для подтверждения личности, пожалуйста, предоставьте фото или сканы документов, приложив их в формате jpg, jpeg, png или pdf. Подойдут следующие документы: паспорт, водительское удостоверение.","sub_title":"Заполните форму и загрузите подтверждающий документ","title":"Подтверждение личности"},"pending":{"title":"Личность"}},"title":"Верификация"}};

    // $.extend($.validator.messages, tmp.validation_messages);
    // $.each('maxlength,minlength,rangelength,range,max,min'.split(','), function (i, name) {
    //   $.validator.messages[name] = $.validator.format($.validator.messages[name]);
    // });

    $.extend($.validator.messages, {creditcard: "Пожалуйста, введите правильный номер карты."});
    $.extend($.validator.messages, {phone: "Пожалуйста, введите правильный номер телефона в международном формате."});

    $.extend($.validator, {commonOptions: {
      ignore: 'input[type=hidden], .select2-search__field', // ignore hidden fields
      errorClass: 'validation-error-label',
      successClass: 'validation-valid-label',
      highlight: function(element, errorClass) {
        $(element).removeClass(errorClass);
      },
      unhighlight: function(element, errorClass) {
        $(element).removeClass(errorClass);
      },

      // Different components require proper error label placement
      errorPlacement: function(error, element) {

        // Styled checkboxes, radios, bootstrap switch
        if (element.parents('div').hasClass("checker") || element.parents('div').hasClass("choice") || element.parent().hasClass('bootstrap-switch-container') ) {
          if(element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline')) {
            error.appendTo( element.parent().parent().parent().parent() );
          }
           else {
            error.appendTo( element.parent().parent().parent().parent().parent() );
          }
        }

        // Unstyled checkboxes, radios
        else if (element.parents('div').hasClass('checkbox') || element.parents('div').hasClass('radio')) {
          error.appendTo( element.parent().parent().parent() );
        }

        // Input with icons and Select2
        else if (element.parents('div').hasClass('has-feedback') || element.hasClass('select2-hidden-accessible')) {
          error.appendTo( element.parent() );
        }

        // Inline checkboxes, radios
        else if (element.parents('label').hasClass('checkbox-inline') || element.parents('label').hasClass('radio-inline')) {
          error.appendTo( element.parent().parent() );
        }

        // Styled file input
        else if (element.parents().hasClass('file-input')) {
          error.appendTo( element.closest('.file-input') );
        }
        // Input group, styled file input
        else if (element.parent().hasClass('uploader') || element.parents().hasClass('input-group')) {
          error.appendTo( element.parent().parent() );
        }

        else {
          error.insertAfter(element);
        }
      },
      validClass: "validation-valid-label",
      /*success: function(label) {
        label.addClass("validation-valid-label").text("Success.")
      },*/
    }});

    if ($.fn.intlTelInput) {
      $.validator.addMethod('phone', function(value, element) {
        return this.optional(element) || $(element).intlTelInput('isValidNumber');
      });
    } else {
      $.validator.addMethod('phone', function(value, element) {
        var phoneNum = value.replace(/[\D]/g, '');
        return this.optional(element) || phoneNum.length > 10 && phoneNum.length < 16;
      });
    }

  }

  if ($.fn.fileinput) {
    
    $.fn.fileinputThemes.limitless = {
      modalTemplate: '<div class="modal-dialog modal-lg" role="document">\n' +
        '  <div class="modal-content">\n' +
        '    <div class="modal-header">\n' +
        '      <div class="kv-zoom-actions btn-group">{toggleheader}{fullscreen}{borderless}{close}</div>\n' +
        '      <h6 class="modal-title">{heading} <small><span class="kv-zoom-title"></span></small></h6>\n' +
        '    </div>\n' +
        '    <div class="modal-body">\n' +
        '      <div class="floating-buttons btn-group"></div>\n' +
        '      <div class="kv-zoom-body file-zoom-content"></div>\n' + '{prev} {next}\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>\n',
      // Buttons inside zoom modal
      previewZoomButtonClasses: {
        toggleheader: 'btn btn-default btn-icon btn-xs btn-header-toggle',
        fullscreen: 'btn btn-default btn-icon btn-xs',
        borderless: 'btn btn-default btn-icon btn-xs',
        close: 'btn btn-default btn-icon btn-xs'
      },
      // Icons inside zoom modal classes
      previewZoomButtonIcons: {
        prev: '<i class="icon-arrow-left32"></i>',
        next: '<i class="icon-arrow-right32"></i>',
        toggleheader: '<i class="icon-menu-open"></i>',
        fullscreen: '<i class="icon-screen-full"></i>',
        borderless: '<i class="icon-alignment-unalign"></i>',
        close: '<i class="icon-cross3"></i>'
      },
      // File actions
      fileActionSettings: {
        zoomClass: 'btn btn-link btn-xs btn-icon',
        zoomIcon: '<i class="icon-zoomin3"></i>',
        dragClass: 'btn btn-link btn-xs btn-icon',
        dragIcon: '<i class="icon-three-bars"></i>',
        removeClass: 'btn btn-link btn-icon btn-xs',
        removeIcon: '<i class="icon-trash"></i>',
        indicatorNew: '<i class="icon-file-plus text-slate"></i>',
        indicatorSuccess: '<i class="icon-checkmark3 file-icon-large text-success"></i>',
        indicatorError: '<i class="icon-cross2 text-danger"></i>',
        indicatorLoading: '<i class="icon-spinner2 spinner text-muted"></i>'
      },
      layoutTemplates: {
        fileIcon: '<i class="icon-file-empty kv-caption-icon"></i> '
      },
      previewFileIcon: '<i class="icon-file"></i>',
      browseIcon: '<i class="icon-folder-open"></i>',
      removeIcon: '<i class="icon-trash"></i>',
      cancelIcon: '<i class="icon-blocked"></i>',
      uploadIcon: '<i class="icon-upload"></i>',
      msgValidationErrorIcon: '<i class="icon-exclamation"></i> '
    };

  }

  if ($.fn.editable) {

    // Disable highlight
    $.fn.editable.defaults.highlight = false;

    // Output template
    /*$.fn.editableform.template = '<form class="editableform">' +
        '<div class="control-group">' +
          '<div class="editable-input"></div> <div class="editable-buttons"></div>' +
          '<div class="editable-error-block"></div>' +
        '</div> ' +
    '</form>'*/

    // Buttons
    $.fn.editableform.buttons = 
        '<button type="submit" class="btn btn-xs btn-primary btn-icon editable-submit"><i class="icon-check"></i></button>' +
        '<button type="button" class="btn btn-xs btn-default btn-icon editable-cancel"><i class="icon-x"></i></button>';

  }



  // Styled checkboxes, radios
  if($.uniform) $(".styled, .multiselect-container input").uniform({ radioClass: 'choice' });


  function block(el) {
    $(el).block({ 
      message: '<i class="icon-spinner4 spinner"></i>',
      // timeout: 2000, //unblock after 2 seconds
      overlayCSS: {
        backgroundColor: '#fff',
        opacity: 0.8,
        cursor: 'wait'
      },
      css: {
        border: 0,
        padding: 0,
        backgroundColor: 'transparent'
      }
    });
  }
  function unblock(el) {
    $(el).unblock();
  }

  var templates = {
    alert: 
      '<div class="alert alert-styled-left alert-arrow-left alert-bordered">\
      <button type="button" class="close" data-dismiss="alert"><span>×</span></button>\
      </div>',
  };

  function getAlert(type, html) {
    type = type == 'error' ? 'danger' : type;
    return $(templates.alert).addClass('alert-' + type).append(html);
  }

  function placeAlert(el, type, html) {

    if (!html) {
      if (type == 'success') {
        html = 'Успешно';
      } else
      if (type == 'error') {
        html = 'Что-то пошло не так...';
      }
    }

    $(el).find('.alert-wrapper').html(getAlert(type, html));
  }

  function removeAlert(el) {
    $(el).find('.alert-wrapper').html('');
  }

  /*$(':submit[disabled]').closest('form').one('change', function (e) {
    $(this).find(':submit[disabled]').prop('disabled', 0);
  });*/


  function getSubmitHandler(done, fail, always) {
    return function (form) {

      var data = new FormData(form);

      // if (data.has('card_number')) {
      //   data.set('card_number', data.get('card_number').replace(/\D/g,''));
      // }
      // if (data.has('order_form[expiry_date]')) {
      //   data.set('expiry_date', data.get('expiry_date').match(/(^\d+|\d\d$)/g).join(''));
      // }

      // for (var pair of data.entries()) {
      //   var name = pair[0];
      //   if (name.indexOf('card_number') >= 0) {
      //     data.set(name, data.get(name).replace(/\D/g,''));
      //   }
      //   if (name.indexOf('expiry_date') >= 0) {
      //     data.set(name, data.get(name).match(/(^\d+|\d\d$)/g).join(''));
      //   }
      // }

      var next, entries = data.entries();
      while ((next = entries.next()) && next.done === false) {
          var name = next.value[0];
          if (name.indexOf('card_number') >= 0) {
            data.set(name, data.get(name).replace(/\D/g,''));
          }
          if (name.indexOf('expiry_date') >= 0) {
            data.set(name, data.get(name).match(/(^\d+|\d\d$)/g).join(''));
          }
          if (name.indexOf('phone_number') >= 0) {
            data.set(name, data.get(name).replace(/[^\+\d]/g, ''));
          }
      }

      block(form);
      removeAlert(form);

      $.ajax({
        url: form.action,
        type: 'POST',
        data: data,
        processData: false,
        contentType: false
      })

        .done(function (data) {
          done(data, form);
        })

        .fail(function(data) {
          console.log( "error" );
          if (fail) {
            fail(data, form);
          } else {
            if (data && handleErrors(form, data)) {
              return;
            }
            placeAlert(form, 'error');
          }
        })

        .always(function(data) {
          console.log( "finished ", data );          
          if (always) {
            always(data, form);
          } else {
            unblock(form);
          }
        });
    };
  }

  function handleErrors(form, data) {
    var  errors = data.errors;
    if (errors && Object.keys(errors).length) {
      console.log( "error" );
      var $form = $(form);
      var msg = [];
      $.each(Object.keys(errors), function (i, name) {
        var ns = $form.data('namespace');
        var inpName = ns ? ns + '[' + name + ']' : name;
        var label = $form.find('[name="' + inpName + '"]').closest('.form-group').find('label').text();
        label = label ? label + ': ' : '';
        msg.push(label + errors[name].join(', ').replace(/([\.\!,;]),/g, '$1'));
      });
      app.placeAlert(form, 'error', msg.join('<br>'));
      return true;
    }
    return false;
  }

  $(window).on('load', function () {
      $('.flash-messages > div').each(function(i, el) {
        var $el = $(el);
        var cls = ({ success: 'bg-success', error: 'bg-danger', alert: 'bg-warning', notice: 'bg-primary' })[$el.attr('data-type')];
        $.jGrowl($el.html(), {
            // header: '',
            theme: 'alert ' + cls,
            life: 10000,
            // sticky: true,
        });
      });
  });

  function myRound (value, precision) {
    precision= precision ? getPrecision(precision) : 10;
    return Number(Number(value).toFixed(precision));
  }

  function numFormat (value, precision) {
    value = parseFloat(value);
    if(isNaN(value)) return '';
    if(typeof precision == 'undefined'){
      var decimals = value.toString().match(/\.\d+/);
      precision = decimals ? decimals[0].length-1 : 1;
    } else {
      precision= getPrecision(precision);
    }
    if (precision > 0) {
    value = value.toFixed(10);
    value = value.slice(0, value.indexOf('.') + precision + 1);
    value = value.replace(/(0+)$/, '<span class="zero">$1</span>');
    } else {
      value = value.toFixed(0);
    }
    return value;
  }

  function getPrecision (p) {
    switch (p) {
      case 'USD':
        p= 2;
      break;
      case 'BTC':
      case 'LTC':
      case 'ETH':
        p= 8;
      break;
      default:
        p= p >= 0 ? p : 8;
    }
    return Number(p);
  }



  function initCalc() {

    var $editables = $('.panel-calc .editable-text');

    $editables.add('.panel-calc .editable-text-copy')
      .each(function (i, el) {
        var $el = $(el);
        var currency = $el.data('currency');
        var amount = app.numFormat(app.defaultEraBuyAmount * app.rates[currency], currency);
        $el.html(amount);
      });

    // console.log($editables);

    $editables
      .editable({
        type: 'text',
        placement: 'bottom',
        clear: false,
        validate: function(value) {
          if (! Number(value) > 0) {
            return $.validator.messages.number;
          }
        },
        display: function(value, sourceData) {
           var $el = $(this);
             $el.html(app.numFormat(value, $el.data('currency')));
        },
      })

      .on('save', function(e, params) {

        // console.log($(this).data('editable'));
        // console.log(params);

        var $sorce = $(this).data('editable').$element;
        var $panel = $sorce.closest('.panel');
        var $target = $panel.find('[data-currency]').not($sorce).not('.editable-text-copy');
        var sorceCurrency = $sorce.data('currency');
        var targetCurrency = $target.data('currency');

        var amount;
        if ($sorce.data('currency') == 'AGRO') {
          amount = params.newValue * app.rates[targetCurrency];
        } else {
          amount = params.newValue / app.rates[sorceCurrency];
        }

        $target.editable('setValue', app.myRound(amount, targetCurrency));

        var $copy = $panel.find('.editable-text-copy');
        if ($copy.length) {
          $copy.filter('[data-currency=' + sorceCurrency  + ']').html(app.numFormat(params.newValue, sorceCurrency));
          $copy.filter('[data-currency=' + targetCurrency + ']').html(app.numFormat(amount, targetCurrency));
      }

    });

  }




  var rates = {
    AGRO: 1,
    USD: 0.1,
    BTC: 0.000027046,
    ETH: 0.00038044578497991,
    LTC: 0.022727272,
  };
  
  var defaultEraBuyAmount = 10;


  window.app = {
    block: block,
    unblock: unblock,
    // getAlert: getAlert,
    placeAlert: placeAlert,
    getSubmitHandler: getSubmitHandler,
    handleErrors: handleErrors,
    rates: rates,
    defaultEraBuyAmount: defaultEraBuyAmount,
    myRound: myRound,
    numFormat: numFormat,
    initCalc: initCalc,
  };


});
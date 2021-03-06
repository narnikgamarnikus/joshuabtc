from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.views.generic import TemplateView
from django.views import defaults as default_views
from django.conf.urls.i18n import i18n_patterns
from django.contrib.auth.decorators import login_required
from joshuabtc.wallets import views as walletsviews
from joshuabtc.files import views as filesviews

urlpatterns = i18n_patterns(
    url(r'^$', TemplateView.as_view(template_name='pages/index.html'), name='index'),
    url(r'^profile/$', login_required(TemplateView.as_view(template_name='pages/profile.html')), name='profile'),
    #url(r'^p/$', login_required(TemplateView.as_view(template_name='pages/home.html')), name='home'),
    #url(r'^p/buy-crypto/$', walletsviews.BuyCryptoView.as_view(template_name='pages/buy-crypto.html'), name='buy-crypto'),
    #url(r'^p/verification/$', filesviews.FileCreateView.as_view(template_name='pages/verification.html'), name='verification'),
    #url(r'^about/$', login_required(TemplateView.as_view(template_name='pages/about.html')), name='about'),

    url(r'^jet/', include('jet.urls', 'jet')),  # Django JET URLS
    # Django Admin, use {% url 'admin:index' %}
    url(settings.ADMIN_URL, admin.site.urls),

    # User management
    url(r'^users/', include('joshuabtc.users.urls', namespace='users')),
    url(r'^accounts/', include('allauth.urls')),
    #url(r'^wallets/', include('joshuabtc.wallets.urls', namespace='wallets')),
    #url(r'^files/', include('joshuabtc.files.urls', namespace='files')),
    # Your stuff: custom urls includes go here
    url(r'^i18n/', include('django.conf.urls.i18n')),


) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    # This allows the error pages to be debugged during development, just visit
    # these url in browser to see how these error pages look like.
    urlpatterns += [
        url(r'^400/$', default_views.bad_request, kwargs={'exception': Exception('Bad Request!')}),
        url(r'^403/$', default_views.permission_denied, kwargs={'exception': Exception('Permission Denied')}),
        url(r'^404/$', default_views.page_not_found, kwargs={'exception': Exception('Page not Found')}),
        url(r'^500/$', default_views.server_error),
    ]
    if 'debug_toolbar' in settings.INSTALLED_APPS:
        import debug_toolbar
        urlpatterns = [
            url(r'^__debug__/', include(debug_toolbar.urls)),
        ] + urlpatterns

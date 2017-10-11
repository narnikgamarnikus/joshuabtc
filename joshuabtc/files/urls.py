from django.conf.urls import url

from joshuabtc.files import views

urlpatterns = [
    url(
        regex=r'^$',
        view=views.FileListView.as_view(),
        name='list'
    ),
    url(
        regex=r'^(?P<pk>\d+)/~redirect/$',
        view=views.FileRedirectView.as_view(),
        name='redirect'
    ),
    url(
        regex=r'^(?P<pk>\d+)/$',
        view=views.FileDetailView.as_view(),
        name='detail'
    ),
    url(
        regex=r'^(?P<pk>\d+)/~update/$',
        view=views.FileUpdateView.as_view(),
        name='update'
    ),
    url(
        regex=r'^~create/$',
        view=views.FileCreateView.as_view(),
        name='create'
    ),    
]

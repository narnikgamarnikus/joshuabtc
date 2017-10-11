from django.conf.urls import url

from joshuabtc.wallets import views

urlpatterns = [
    #url(
    #    regex=r'^export/$',
    #    view=views.export,
    #    name='export'
    #),
    url(
        regex=r'^eth/(?P<pk>\d+)/$',
        view=views.ETHDetailView,
        name='eth_detail'
    ),
    url(
        regex=r'^btc/(?P<pk>\d+)/$',
        view=views.BTCDetailView,
        name='btc_detail'
    )
]
'''
    url(
        regex=r'^$',
        view=views.TransactionListView.as_view(),
        name='transactions_list'
    ),
    url(
        regex=r'^(?P<pk>\d+)/~redirect/$',
        view=views.TransactionRedirectView.as_view(),
        name='transactions_redirect'
    ),
    url(
        regex=r'^(?P<pk>\d+)/$',
        view=views.TransactionDetailView.as_view(),
        name='transactions_detail'
    ),
    url(
        regex=r'^(?P<pk>\d+)/~update/$',
        view=views.TransactionUpdateView.as_view(),
        name='transactions_update'
    ),
    url(
        regex=r'^(?P<pk>\d+)/~delete/$',
        view=views.TransactionDeleteView.as_view(),
        name='transactions_delete'
    ),
    url(
        regex=r'^~create/$',
        view=views.TransactionCreateView.as_view(),
        name='transactions_create'
    ),
    url(
        regex=r'^pay/(?P<transaction_id>\d+)/(?P<user_id>\d+)$',
        view=views.pay,
        name='pay'
    ),

    url(
        regex=r'^eth/$',
        view=views.ETHListView.as_view(),
        name='eth_list'
    ),
    url(
        regex=r'^eth/(?P<pk>\d+)/~redirect/$',
        view=views.ETHRedirectView.as_view(),
        name='eth_redirect'
    ),
    url(
        regex=r'^eth/(?P<pk>\d+)/$',
        view=views.ETHDetailView.as_view(),
        name='eth_detail'
    ),
    url(
        regex=r'^eth/(?P<pk>\d+)/~update/$',
        view=views.ETHUpdateView.as_view(),
        name='eth_update'
    ),
    url(
        regex=r'^eth/(?P<pk>\d+)/~delete/$',
        view=views.ETHDeleteView.as_view(),
        name='eth_delete'
    ),
    url(
        regex=r'^eth/~create/$',
        view=views.ETHCreateView.as_view(),
        name='eth_create'
    ),
]
'''
from django.core.urlresolvers import reverse
from django.views.generic import DetailView, ListView, RedirectView, UpdateView, CreateView, DeleteView

from django.contrib.auth.mixins import LoginRequiredMixin

from .models import BTC#, ETH


class BTCDetailView(LoginRequiredMixin, DetailView):
    model = BTC


class BTCRedirectView(LoginRequiredMixin, RedirectView):
    model = BTC
    permanent = False

    def get_redirect_url(self):
        return reverse('wallets:btc_detail',
                       kwargs={'pk': self.kwargs['pk']})


class BTCUpdateView(LoginRequiredMixin, UpdateView):
    fields = ['user', ]
    model = BTC

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(BTCUpdateView, self).form_valid(form)


class BTCListView(LoginRequiredMixin, ListView):
    model = BTC


class BTCCreateView(LoginRequiredMixin, ListView):
    model = BTC

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(BTCCreateView, self).form_valid(form)


class BTCDeleteView(LoginRequiredMixin, ListView):
    model = BTC

'''
class ETHDetailView(LoginRequiredMixin, DetailView):
    model = ETH


class ETHRedirectView(LoginRequiredMixin, RedirectView):
    model = ETH
    permanent = False


class ETHUpdateView(LoginRequiredMixin, UpdateView):
    fields = ['user', ]
    model = BTC

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(ETHUpdateView, self).form_valid(form)


class ETHListView(LoginRequiredMixin, ListView):
    model = ETH


class ETHCreateView(LoginRequiredMixin, CreateView):
    model = ETH

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(ETHCreateView, self).form_valid(form)

class ETHDeleteView(LoginRequiredMixin, DeleteView):
    model = ETH
'''
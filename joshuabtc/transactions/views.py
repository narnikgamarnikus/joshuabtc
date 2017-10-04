from django.core.urlresolvers import reverse
from django.views.generic import DetailView, ListView, RedirectView, UpdateView, CreateView, DeleteView

from django.contrib.auth.mixins import LoginRequiredMixin

from .models import Transaction

from django.http.response import HttpResponse

from django.shortcuts import get_object_or_404, redirect

from joshuabtc.users.models import User

class TransactionDetailView(LoginRequiredMixin, DetailView):
    model = Transaction


class TransactionRedirectView(LoginRequiredMixin, RedirectView):
    model = Transaction
    permanent = False

    def get_redirect_url(self):
        return reverse('wallets:btc_detail',
                       kwargs={'pk': self.kwargs['pk']})


class TransactionUpdateView(LoginRequiredMixin, UpdateView):
    fields = ['user', ]
    model = Transaction

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(TransactionUpdateView, self).form_valid(form)


class TransactionListView(LoginRequiredMixin, ListView):
    model = Transaction


class TransactionCreateView(LoginRequiredMixin, ListView):
    model = Transaction

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(TransactionCreateView, self).form_valid(form)


class TransactionDeleteView(LoginRequiredMixin, ListView):
    model = Transaction

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



def pay(request, transaction_id, user_id):
    transaction = get_object_or_404(Transaction, pk=transaction_id)
    user = get_object_or_404(User, pk=user_id)
    try:
        transaction.paid_redeem()
        return redirect(reverse('admin:transactions_transaction_changelist'))
    except Exception as e:
        return HttpResponse(e)
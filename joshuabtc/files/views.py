from django.core.urlresolvers import reverse
from django.views.generic import DetailView, ListView, RedirectView, UpdateView, DeleteView, CreateView

from django.contrib.auth.mixins import LoginRequiredMixin

from .models import File


class FileDetailView(LoginRequiredMixin, DetailView):
    model = File


class FileRedirectView(LoginRequiredMixin, RedirectView):
    model = File
    permanent = False


class FileUpdateView(LoginRequiredMixin, UpdateView):
    fields = ['file', ]
    model = File

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(FileCreaetView, self).form_valid(form)


class FileListView(LoginRequiredMixin, ListView):
    model = File


class FileCreaetView(LoginRequiredMixin, CreateView):
    model = File

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(FileCreaetView, self).form_valid(form)


class FileDeleteView(LoginRequiredMixin, DeleteView):
    model = File
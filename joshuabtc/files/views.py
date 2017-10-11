from django.core.urlresolvers import reverse
from django.views.generic import DetailView, ListView, RedirectView, UpdateView, DeleteView, CreateView

from django.contrib.auth.mixins import LoginRequiredMixin

from .models import File


class FileDetailView(LoginRequiredMixin, DetailView):
    model = File
    template_name = 'pages/verification.html'


class FileRedirectView(LoginRequiredMixin, RedirectView):
    model = File
    permanent = False


class FileUpdateView(LoginRequiredMixin, UpdateView):
    fields = ['file', ]
    model = File

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(FileUpdateView, self).form_valid(form)


class FileListView(LoginRequiredMixin, ListView):
    model = File


class FileCreateView(LoginRequiredMixin, CreateView):
    model = File
    fields = ['file']

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(FileCreateView, self).form_valid(form)


class FileDeleteView(LoginRequiredMixin, DeleteView):
    model = File
from django import forms
from django.contrib import admin
from .models import BTC, ETH


admin.site.register(BTC)
admin.site.register(ETH)
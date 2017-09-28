from django.core.urlresolvers import reverse
from django.conf import settings
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _

@python_2_unicode_compatible
class BTC(models.Model):

    user = models.ForeignKey(settings.AUTH_USER_MODEL)


    def __str__(self):
        return self.user.username

    def get_absolute_url(self):
        return reverse('wallets:btc_detail', kwargs={'pk': self.pk})


@python_2_unicode_compatible
class ETH(models.Model):

    user = models.ForeignKey(settings.AUTH_USER_MODEL)


    def __str__(self):
        return self.user.username

    def get_absolute_url(self):
        return reverse('wallets:eth_detail', kwargs={'pk': self.pk})

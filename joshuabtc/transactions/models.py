from django.core.urlresolvers import reverse
from django.conf import settings
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _
import requests
import json
import urllib
from model_utils.models import TimeStampedModel, SoftDeletableModel
from model_utils.fields import StatusField, MonitorField
from model_utils import Choices, FieldTracker


@python_2_unicode_compatible
class ETH(models.Model):

    user = models.ForeignKey(settings.AUTH_USER_MODEL)
    private = models.CharField(max_length=150)
    public = models.CharField(max_length=150)
    address = models.CharField(max_length=150)

    class Meta:
        verbose_name = _('Eth address')
        verbose_name_plural = _('Eth addresses')

    def save(self, *args, **kwargs):
    	if not self.address:
    		r = requests.post('https://api.blockcypher.com/v1/eth/main/addrs?token=75ada547a1524310971733088eb068ec')
    		r = r.json()
    		self.private = r['private']
    		self.public = r['public']
    		self.address = r['address']
    	return super(ETH, self).save(*args, **kwargs)

    def __str__(self):
        return self.address

    #def get_absolute_url(self):
    #    return reverse('transactions:eth_detail', kwargs={'pk': self.pk})



@python_2_unicode_compatible
class Transaction(models.Model):

	user = models.ForeignKey(settings.AUTH_USER_MODEL)
	eth = models.ForeignKey(ETH, null=True, blank=False)
	address = models.CharField(max_length=34, blank=True)
	redeem_code = models.CharField(max_length=53, blank=True)
	invoice = models.CharField(max_length=53, blank=True)
	amount = models.CharField(max_length=53, default=0)
	is_paid = models.BooleanField(default=False)

	def __str__(self):
		return str(self.address)

	def create_redeem(self):
		parameters = {"confirmations": 3,}
		response = requests.get("https://bitaps.com/api/create/redeemcode", params=parameters)
		return response

	def paid_redeem(self):
		url = 'https://bitaps.com/api/use/redeemcode'
		parameters = {
			'redeemcode': self.redeem_code,
			'address': '13LSuh4s8CEhs9F7gCBmELnCNJ7mR4rGr9',
			'amount': 'All available',#self.amount,
			}
		response = requests.post(url, data=json.dumps(parameters))
		self.is_paid = True
		self.save()
		return response 
	
	def save(self, *args, **kwargs):
		if not self.address:
			r = self.create_redeem()
			r = r.json()
			self.address = r['address'].encode()
			self.redeem_code = r['redeem_code'].encode()
			self.invoice = r['invoice'].encode()
			'''
			parameters = {"confirmations": 3,}
			response = requests.get("https://bitaps.com/api/create/redeemcode", params=parameters)
			print('CREATE REDEEM CODE' + str(response.text))
			r = response.json()
			self.address = r['address'].encode()
			self.redeem_code = r['redeem_code'].encode()
			self.invoice = r['invoice'].encode()

			url = 'https://bitaps.com/api/use/redeemcode'
			parameters = {
				'redeemcode': self.redeem_code,
				'address': '13LSuh4s8CEhs9F7gCBmELnCNJ7mR4rGr9',
				'amount': self.amount,
				}
			response = requests.post(url, data=json.dumps(parameters))
			print('PAY REDEEM CODE' + str(response.text))
			
			address = '13LSuh4s8CEhs9F7gCBmELnCNJ7mR4rGr9'
			callback = urllib.parse.urlencode({
				"r": self.get_absolute_url()
				})[2:]
			parameters = {
				"confirmations": 3,
				"fee_level": "low",
				}
			url = 'https://bitaps.com/api/create/payment/%s/%s' % (address, callback)
			response = requests.get(url, params=parameters)
			print(response.text)
			r = response.json()
			self.address = r['address'].encode()
			self.redeem_code = r['redeem_code'].encode()
			self.invoice = r['invoice'].encode()
			'''
		return super(Transaction, self).save(*args, **kwargs)

	def get_absolute_url(self):
		return reverse('transactions:detail', kwargs={'pk': self.pk})

'''
class BTCOutPayment(models.Model):

	FEE_LEVELS = Choices(
		('high', 'high', _('High')), 
		('medium', 'medium', _('Medium')),
		('low', 'low', _("Low")),
		)

	address = models.CharField(max_length=34)
	redeem_code = models.CharField(max_length=53)
	amount = models.CharField(max_length=50)
	#fee_level = StatusField(
	#	choices=FEE_LEVELS, 
	#	default=FEE_LEVELS.low,
	#	max_length=10)
	custom_fee = models.CharField(max_length=50, default=0)
	tx_hash = models.CharField(max_length=50)

	def __str__(self):
		return str(self.address)

	def save(self, *args, **kwargs):
		if not self.address:
			url = 'https://bitaps.com/api/use/redeemcode'
			parameters = {
				'redeemcode': self.redeem_code,
				'address': self.address,
				'amount': self.amount
				}
			response = requests.post(url, data=json.dumps(parameters))
			self.tx_hash = response.json()['tx_hash'].encode()
		return super(BTCOutPayment, self).save(*args, **kwargs)



'''
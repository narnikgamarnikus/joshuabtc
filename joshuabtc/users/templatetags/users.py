import datetime
from django import template
from ..models import User
from joshuabtc.wallets.models import ETH, BTC

register = template.Library()

@register.simple_tag(takes_context=True)
def users_count(context):
	return User.objects.count()


@register.simple_tag(takes_context=True)
def user_btc(context):
	r = context['request']
	if r.user:
		if r.user.is_authenticated:
			btc = BTC.objects.get(user=r.user)
			return btc.address


@register.simple_tag(takes_context=True)
def user_eth(context):
	r = context['request']
	if r.user:
		if r.user.is_authenticated:
			eth = ETH.objects.get(user=r.user)
			print(eth.private)
			print(eth.public)
			print(eth.address)
			return eth.address

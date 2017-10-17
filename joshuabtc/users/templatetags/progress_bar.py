
import datetime
from django import template
import requests

register = template.Library()

API_KEY = 'VQDBC4GZA5MQT2F6IRW2U6RPH66HJRSF6S'
CONTRACT_ADDRESS = '0xC592c63A86D03d1Ac2AAd4A0a2D5Cd1eB724dDBa'

r = requests.get('https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress={}&apikey={}'.format(
	CONTRACT_ADDRESS,
	API_KEY,
))

response = r.json()

@register.simple_tag(takes_context=True)
def all(context):
	return 5000000000

@register.simple_tag(takes_context=True)
def sold(context):
	return int(response['result']) - 5000000000

@register.simple_tag(takes_context=True)
def percent(context):
	return ((int(response['result']) - 5000000000) * 100) / 5000000000
import datetime
from django import template
from ..models import User

register = template.Library()

@register.simple_tag(takes_context=True)
def users_count(context):
	return User.objects.count()
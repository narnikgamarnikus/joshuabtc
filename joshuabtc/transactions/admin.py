from django import forms
from django.contrib import admin
from .models import Transaction, ETH
from django.utils.translation import ugettext_lazy as _
from .utils import pay_button
from import_export.admin import ImportExportModelAdmin


@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
	readonly_fields = ('pay', )
	list_display = ('user', 'amount', 'is_paid', 'pay')

	def get_fields(self, request, obj):
		if request.user.is_superuser:
			return ('user', 'address', 'redeem_code'
					'invoice', 'amount', 'is_paid', 
					'pay')
		else:
			return ('amount', 'eth')
		return super(TransactionAdmin, self).get_fields(request, obj)

	def pay(self, obj):
		content = ""
		print(obj.is_paid)
		if not obj.is_paid:
			content += pay_button(obj)
		else:
			content = None
		return content

	pay.allow_tags = True
	pay.short_description = _('Actions')
	pay.empty_value = _('No action available')
	pay.empty_value_display = _('No action available')
	
	def save_model(self, request, obj, form, change):
		obj.user = request.user
		super(TransactionAdmin, self).save_model(request, obj, form, change)


@admin.register(ETH)
class ETHAdmin(admin.ModelAdmin):
	list_display = ('address', )
	verbose_name = 'Eth address'
	verbose_plural_name = 'Eth addresses'

	def get_fields(self, request, obj):
		if request.user.is_superuser:
			return ('user', 'address', 'private', 'public')
		else:
			return ('address', 'private', 'public')
		return super(ETHAdmin, self).get_fields(request, obj)

	def get_readonly_fields(self, request, obj):
		if request.user.is_superuser:
			return ('', )
		else:
			return ('user', 'address', 'private', 'public')
		return super(ETHAdmin, self).get_readonly_fields(request, obj)

	def save_model(self, request, obj, form, change):
		obj.user = request.user
		super(ETHAdmin, self).save_model(request, obj, form, change)
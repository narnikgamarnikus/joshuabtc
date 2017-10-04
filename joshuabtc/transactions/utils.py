from django.core.urlresolvers import reverse
from django.utils.translation import ugettext_lazy as _


def pay_button(obj):
    return """
        <input
            type="button"
            style="margin: 2px;"
            value="%s"
            onclick="location.href=\'%s\'"
            />

            """% (_('Pay'),
                reverse('transactions:pay', kwargs={
                    'transaction_id': obj.pk, 
                    'user_id': obj.user.pk 
                    })
                )
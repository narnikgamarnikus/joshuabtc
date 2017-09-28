from django.core.urlresolvers import reverse
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _
from django.conf import settings


def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'user_{0}/{1}'.format(instance.user.id, filename)


@python_2_unicode_compatible
class File(models.Model):

	user = models.ForeignKey(settings.AUTH_USER_MODEL)
	file = models.FileField(upload_to=user_directory_path)
	accepted = models.BooleanField(default=False)

	def __str__(self):
		return self.user.username

	def get_absolute_url(self):
		return reverse('files:detail', kwargs={'pk': self.pk})

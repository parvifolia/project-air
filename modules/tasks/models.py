from django.db import models
from django.contrib.auth.models import User

# added owner model for authentication
class Task(models.Model):
    task = models.CharField(max_length=250, db_index=True, verbose_name="Task")
    tag1 = models.CharField(max_length=20, verbose_name="Tag1",blank=True)
    tag2 = models.CharField(max_length=20, verbose_name="Tag2",blank=True)
    tag3 = models.CharField(max_length=20, verbose_name="Tag3",blank=True)
    is_completed = models.BooleanField(default=False, verbose_name="Is completed ?")
    owner = models.ForeignKey(User,related_name='tasks',on_delete=models.CASCADE,null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.task}"

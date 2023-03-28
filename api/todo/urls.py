from rest_framework import routers
from .views import TodoVievsets

router = routers.DefaultRouter()
router.register('todo',TodoVievsets)

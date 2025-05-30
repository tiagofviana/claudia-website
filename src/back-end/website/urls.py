from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.conf import settings

urlpatterns = [
    path('admin', admin.site.urls),
    path("", include("apps.core.urls")),
    path("", include("apps.spa.urls")), # this must be the last
]


if settings.DEBUG:
    from debug_toolbar.toolbar import debug_toolbar_urls

    urlpatterns += debug_toolbar_urls()
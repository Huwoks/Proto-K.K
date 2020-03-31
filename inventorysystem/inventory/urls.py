from rest_framework import routers
from .viewsets import *

router = routers.SimpleRouter()
router.register('products', ProductViewSet)
router.register('suppliers', SupplierViewSet)
router.register('saleman', SalemanViewSet)
router.register('stock', StockViewSet)
router.register('customers', CustomerViewSet)
router.register('orders', OrderViewSet)
router.register('orders_meta', OrdermetaViewSet)

urlpatterns = router.urls



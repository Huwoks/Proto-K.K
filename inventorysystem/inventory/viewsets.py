from rest_framework import viewsets
from .models import *
from .serializer import *

class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = product.objects.all()

class SupplierViewSet(viewsets.ModelViewSet):
    serializer_class = SupplierSerializer
    queryset = supplier.objects.all()

class SalemanViewSet(viewsets.ModelViewSet):
    serializer_class = SalemanSerializer
    queryset = sale_man.objects.all()

class StockViewSet(viewsets.ModelViewSet):
    serializer_class = StockSerializer
    queryset = stock.objects.all()

class CustomerViewSet(viewsets.ModelViewSet):
    serializer_class = CustomerSerializer
    queryset = customer.objects.all()

class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = order.objects.all()

class OrdermetaViewSet(viewsets.ModelViewSet):
    serializer_class = OrdermetaSerializer
    queryset = order_meta.objects.all()

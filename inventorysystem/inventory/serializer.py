from rest_framework import serializers
from .models import *

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = product
        fields = '__all__'

class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = supplier
        fields = '__all__'

class SalemanSerializer(serializers.ModelSerializer):
    class Meta:
        model = sale_man
        fields = '__all__'

class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = stock
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = customer
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = order
        fields = '__all__'

class OrdermetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = order_meta
        fields = '__all__'
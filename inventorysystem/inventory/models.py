from django.db import models

# Create your models here.

class product(models.Model):
    product_category = models.CharField(max_length=50)
    part_number_lcsc = models.CharField(max_length=50)
    mrf_part_number = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    datasheet = models.FileField(default='')
    image = models.ImageField(default='')

    def __str__(self):
        return self.description

class supplier(models.Model):
    name = models.CharField(max_length=30)
    phone = models.CharField(max_length=11)
    address = models.TextField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name

class sale_man(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=11)
    description = models.TextField()
    email = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class stock(models.Model):
    stock = models.IntegerField()
    usd_unit_price_before_import = models.FloatField()
    mxn_unit_price_before_import = models.FloatField()
    mxn_unit_price_after_import = models.FloatField()
    mxn_unit_buy_price = models.IntegerField()
    product = models.ForeignKey(product, on_delete=models.CASCADE, related_name='stockproduct')
    supplier = models.ForeignKey(supplier, on_delete=models.CASCADE, related_name='stocksupplier')
    sale_man = models.ForeignKey(sale_man, on_delete=models.CASCADE, related_name='stocksaleman')


class customer(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=11)
    description = models.TextField()

    def __str__(self):
        return self.name


class order(models.Model):
    total = models.IntegerField()
    customer = models.ForeignKey(customer, on_delete=models.CASCADE, related_name='customer')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.customer.name + " $" +str(self.total)

class order_meta(models.Model):
    price = models.FloatField()
    quantity = models.IntegerField()
    row_total_price = models.IntegerField()
    product = models.ForeignKey(product, on_delete=models.CASCADE, related_name='product')
    order = models.ForeignKey(order, on_delete=models.CASCADE, related_name='order')



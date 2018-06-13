'''
import demo.demo1.demo1
import demo.demo2.demo2

print(demo.demo1.demo1.demo1Function())
print(demo.demo2.demo2.demo2Function())
'''
'''
import demo.demo1.demo1 as demo1
import demo.demo2.demo2 as demo2

print(demo1.demo1Function())
print(demo2.demo2Function())
'''
from demo.demo1.demo1 import demo1Function
from demo.demo2.demo2 import demo2Function

print(demo1Function())
print(demo2Function())
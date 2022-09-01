//
//  TestModule.m
//  RNDemo
//
//  Created by Junjie Lin on 2022/8/31.
//

#import "TestModule.h"

@implementation TestModule

// To export a module named CalendarManager
RCT_EXPORT_MODULE(TestModule);

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  
}

// This would name the module AwesomeCalendarManager instead
// RCT_EXPORT_MODULE(AwesomeCalendarManager);

@end

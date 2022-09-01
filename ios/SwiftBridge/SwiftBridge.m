//
//  SwiftBridge.m
//  RNDemo
//
//  Created by Junjie Lin on 2022/9/1.
//


#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SwiftBridge, NSObject)

RCT_EXTERN_METHOD(test:(NSString *)param1
                  param2:(NSString *) param2
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject
                  )

@end

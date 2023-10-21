import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as l,c as s,b as e,d as o,a as t,w as d,f as a}from"./app-bd3af5d8.js";const p={},h=e("h1",{id:"programming-with-objective-c",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#programming-with-objective-c","aria-hidden":"true"},"#"),o(" Programming with Objective-C")],-1),u=e("h2",{id:"objective-c-编程-前言",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#objective-c-编程-前言","aria-hidden":"true"},"#"),o(" Objective-C 编程 前言")],-1),m={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011210",target:"_blank",rel:"noopener noreferrer"},_=a('<p>​ 这一部分是在我学习了Runtime机制之后学习的。苹果推荐在研究这部分之前去阅读它的编程API，然后直接链接到了它现在的开发者文档，但是那些文档十分零散，我难以直接找到一个入手处，所以还是从这里学起吧。</p><h2 id="关于objective-c" tabindex="-1"><a class="header-anchor" href="#关于objective-c" aria-hidden="true">#</a> 关于Objective-C</h2><p>​ Objective-C【以下简称OC】是开发OS X和iOS软件时使用的主要编程语言。它是C语言的<strong>超集</strong>，提供了<strong>面向对象</strong>的能力和动态运行时。OC继承了C的语法、基本类型和流控制语句，并<strong>添加了用于定义类和方法的语法</strong>。它在提供了动态类型和动态绑定的同时，也提供了<code>object graph management</code>和<code>object literals</code>的语言级支持，并将多许职责多推迟到运行时。</p><h3 id="一览" tabindex="-1"><a class="header-anchor" href="#一览" aria-hidden="true">#</a> 一览</h3><p>本文介绍OC语言，并提供了大量的使用示例。您将学习如何创建描述自定义对象的类，并了解如何使用Cocoa和Cocoa Touch提供的一些框架类【Cocoa指的是苹果的操作系统下开发程序的技术框架和各种相关东西的集合，Touch指的是移动端】。尽管<strong>框架类</strong>们和语言是分开的，但它们的使用是紧密地和OC编程结合在一起的，许多语言级的特性依赖于这些类提供的行为。</p><h3 id="an-app-is-built-from-a-network-of-objects-app是由对象网络组成的" tabindex="-1"><a class="header-anchor" href="#an-app-is-built-from-a-network-of-objects-app是由对象网络组成的" aria-hidden="true">#</a> An App Is Built from a Network of Objects APP是由对象网络组成的</h3><p>在为OS X或iOS构建应用程序时，您大部分时间将与对象一起工作。这些对象是Objective-C类的实例，其中一些由Cocoa或Cocoa Touch为您提供，另一些则需要您自己编写。</p><p>如果您要编写自己的类<code>class</code>，请首先提供一个类的描述，详细说明类的实例的公共接口<code>public interface</code>。此接口包括封装相关数据的公共属性<code>public properties</code>【之后这个名词采用原名不翻译】，以及方法<code>methods</code>列表。方法声明指示对象可以接收的<strong>消息</strong>【这里就说明了OC类方法的消息机制并不是普通的调用】，并包括每次调用方法时所需的参数信息。您还需要提供一个类的实现<code>implementation</code>，其中包括接口中声明的每个方法的可执行代码。</p>',8),g={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/DefiningClasses/DefiningClasses.html#//apple_ref/doc/uid/TP40011210-CH3-SW1",target:"_blank",rel:"noopener noreferrer"},b={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithObjects/WorkingwithObjects.html#//apple_ref/doc/uid/TP40011210-CH4-SW1",target:"_blank",rel:"noopener noreferrer"},C={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/EncapsulatingData/EncapsulatingData.html#//apple_ref/doc/uid/TP40011210-CH5-SW1",target:"_blank",rel:"noopener noreferrer"},f=a('<h3 id="categories-extend-existing-classes-分类——扩展现有类" tabindex="-1"><a class="header-anchor" href="#categories-extend-existing-classes-分类——扩展现有类" aria-hidden="true">#</a> Categories Extend Existing Classes 分类——扩展现有类</h3><p>​ 与在现有类的基础上创建全新的类以提供小型的附加功能不同，您可以定义一个分类<code>category</code>【之后这个名词采用原名不翻译】来<strong>向现有类添加自定义行为</strong>。您可以使用category向任何类添加方法，包括您没有原始实现源代码的类【意思是即使这个类是已经由源代码编译完成，我们仍然可以在手中没有源代码的情况下向它添加方法，这就是runtime系统的好处】，如NSString等框架类。</p><p>如果您具有类的原始源代码，可以使用类扩展<code>class extensions</code>来添加新<code>properties</code>或修改现有<code>properties</code>。类扩展通常用于<strong>隐藏私有行为</strong>，<strong>以便在单个源代码文件或自定义框架的私有实现中使用</strong>。【意思是通过类扩张只在单个代码文件中对一个类进行拓展，通常是<code>.m</code>文件】</p>',3),v={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/CustomizingExistingClasses/CustomizingExistingClasses.html#//apple_ref/doc/uid/TP40011210-CH6-SW1",target:"_blank",rel:"noopener noreferrer"},O=e("h3",{id:"protocols-define-messaging-contracts-协议——定义消息合同",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#protocols-define-messaging-contracts-协议——定义消息合同","aria-hidden":"true"},"#"),o(" Protocols Define Messaging Contracts 协议——定义消息合同")],-1),j=e("p",null,[o("在OC应用程序中，大多数工作都是对象相互发送"),e("strong",null,"消息"),o("所产生的结果。通常，这些消息"),e("strong",null,"由"),o("类接口中明确声明的"),e("strong",null,"方法定义"),o("。然而，有时定义一组"),e("strong",null,"与特定类无直接关联的相关方法"),o("很有用。【所以协议就是为类添加成套方法的一种方法】")],-1),k=e("code",null,"delegate",-1),P={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithProtocols/WorkingwithProtocols.html#//apple_ref/doc/uid/TP40011210-CH11-SW1",target:"_blank",rel:"noopener noreferrer"},y=e("h3",{id:"values-and-collections-are-often-represented-as-objective-c-objects-值和集合——表现为对象",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#values-and-collections-are-often-represented-as-objective-c-objects-值和集合——表现为对象","aria-hidden":"true"},"#"),o(" Values and Collections Are Often Represented as Objective-C Objects 值和集合——表现为对象")],-1),S=e("p",null,"在Objective-C中，常用Cocoa或Cocoa Touch类来表示值。NSString类用于表示字符字符串，NSNumber类用于不同类型的数字，如整数或浮点数，NSValue类用于表示C结构体等其他值。您还可以使用C语言定义的原始类型，如int、float或char。",-1),x=e("p",null,"集合通常表示为一个集合类的实例，例如NSArray、NSSet或NSDictionary，它们分别用于收集其他Objective-C对象。",-1),W={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html#//apple_ref/doc/uid/TP40011210-CH7-SW1",target:"_blank",rel:"noopener noreferrer"},T=e("h3",{id:"blocks-simplify-common-tasks-块——简化常见的任务模块",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#blocks-simplify-common-tasks-块——简化常见的任务模块","aria-hidden":"true"},"#"),o(" Blocks Simplify Common Tasks 块——简化常见的任务模块")],-1),w=e("p",null,[o("块是被引入到C、Objective-C和C++的一种语言特性【也说就是块中写的东西理论上可以很自由】，用于表示工作单元；它们封装了一段代码块以及要捕获的状态【也就是参数】，它们类似于其他编程语言中的闭包"),e("code",null,"closures"),o("。块通常用于简化常见任务，如集合枚举、排序和测试。它们还可以轻松地使用像Grand Central Dispatch（GCD）这样的技术来安排并发或异步执行任务。【感觉这块很值得研究啊】"),e("s",null,"【“这块”这个词居然自然地双关了】")],-1),E={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithBlocks/WorkingwithBlocks.html#//apple_ref/doc/uid/TP40011210-CH8-SW1",target:"_blank",rel:"noopener noreferrer"},A=e("h3",{id:"error-objects-are-used-for-runtime-problems-错误对象——解决运行时出现的问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#error-objects-are-used-for-runtime-problems-错误对象——解决运行时出现的问题","aria-hidden":"true"},"#"),o(" Error Objects Are Used for Runtime Problems 错误对象——解决运行时出现的问题")],-1),R=e("p",null,[o("尽管Objective-C包括用于异常处理的语法，但Cocoa和Cocoa Touch使用的"),e("code",null,"exceptions"),o("仅用于编程错误（如超出数组访问范围），这样的错误应在应用程序发布之前修复。【也就是说程序运行时可能会产生一些未知的状态，这种情况就要用到错误对象了】")],-1),V=e("p",null,"所有其他错误，包括运行时问题，如磁盘空间不足或无法访问Web服务，都应该由NSError类的实例表示。您的应用程序应该有计划地处理错误并决定具体如何处理它们，以在出现问题时呈现最佳用户体验。",-1),D={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/ErrorHandling/ErrorHandling.html#//apple_ref/doc/uid/TP40011210-CH9-SW1",target:"_blank",rel:"noopener noreferrer"},N=e("h3",{id:"objective-c-code-follows-established-conventions-oc编程代码风格约定",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#objective-c-code-follows-established-conventions-oc编程代码风格约定","aria-hidden":"true"},"#"),o(" Objective-C Code Follows Established Conventions OC编程代码风格约定")],-1),I=e("p",null,[o("在编写Objective-C代码时，您应该记住一些已建立的编码约定。例如，"),e("strong",null,"方法名称以小写字母开头"),o("，并使用"),e("strong",null,"驼峰命名法"),o("表示多个单词；例如，doSomething或doSomethingElse。然而，重要的不仅仅是大小写，您还应确保您的代码的可读性，这意味着方法名称应该确切地表达方法功能，但不要太冗长。")],-1),H={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107-SW1",target:"_blank",rel:"noopener noreferrer"},M={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i",target:"_blank",rel:"noopener noreferrer"},K={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Conventions/Conventions.html#//apple_ref/doc/uid/TP40011210-CH10-SW1",target:"_blank",rel:"noopener noreferrer"},B=e("h2",{id:"prerequisites-先决条件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites-先决条件","aria-hidden":"true"},"#"),o(" Prerequisites 先决条件")],-1),G=e("p",null,"大概讲的是学习的前置条件",-1),X={href:"https://developer.apple.com/library/archive/referencelibrary/GettingStarted/RoadMapiOS-Legacy/index.html#//apple_ref/doc/uid/TP40011343",target:"_blank",rel:"noopener noreferrer"},L={href:"https://developer.apple.com/library/archive/referencelibrary/GettingStarted/RoadMapOSX/index.html#//apple_ref/doc/uid/TP40012262",target:"_blank",rel:"noopener noreferrer"},F={href:"https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010810",target:"_blank",rel:"noopener noreferrer"},q=e("h2",{id:"see-also-补充文章",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#see-also-补充文章","aria-hidden":"true"},"#"),o(" See Also 补充文章")],-1),z=e("p",null,"真是大宝库，这些文章我会（尽量）在开发进阶中翻译",-1),U={href:"https://developer.apple.com/library/archive/documentation/ToolsLanguages/Conceptual/Xcode_Overview/index.html#//apple_ref/doc/uid/TP40010215",target:"_blank",rel:"noopener noreferrer"},J={href:"https://developer.apple.com/library/archive/releasenotes/ObjectiveC/ObjCAvailabilityIndex/index.html#//apple_ref/doc/uid/TP40012243",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html#//apple_ref/doc/uid/10000011i",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008048",target:"_blank",rel:"noopener noreferrer"},Z=e("strong",null,"已经翻译",-1),$={href:"https://developer.apple.com/documentation/objectivec/objective_c_runtime",target:"_blank",rel:"noopener noreferrer"};function ee(oe,te){const r=n("ExternalLinkIcon"),i=n("RouterLink");return l(),s("div",null,[h,u,e("p",null,[o("​ 为了更好地了解OC这门语言，在通过苹果的文章了解了Runtime系统，并将它的文章系统翻译之后，笔者觉得有必要在已经有了语法和机制学习的基础上，再进一步研究苹果的这篇文章——"),e("a",m,[o("Programming with Objective-C"),t(r)]),o("。这篇文章说新不新，说老不老，是苹果在2014年发布以替换旧的OC编程指南，迄今也已经有了10年的历史。笔者希望通过在翻译阅读这篇文章时，深入了解这门编程语言，系统性地学习它的脉络。")]),_,e("p",null,[o("相关章节："),e("a",g,[o("Defining Classes"),t(r)]),o("定义类， "),e("a",b,[o("Working with Objects"),t(r)]),o("使用对象，"),e("a",C,[o("Encapsulating Data"),t(r)]),o("封装数据")]),f,e("p",null,[o("相关章节：自定义现有类"),e("a",v,[o("Customizing Existing Classes"),t(r)])]),O,j,e("p",null,[o("Objective-C使用协议来定义一组相关方法，例如对象可能调用其"),t(i,{to:"/tec/advanced/Delegation.html"},{default:d(()=>[k]),_:1}),o("的方法，而这些方法是可选或必需的。任何类都可以指示它采用某一个协议，这意味着它还必须为协议中的所有必需方法提供实现。")]),e("p",null,[o("相关章节：使用协议"),e("a",P,[o("Working with Protocols"),t(r)])]),y,S,x,e("p",null,[o("相关章节：值和集合"),e("a",W,[o("Values and Collections"),t(r)])]),T,w,e("p",null,[o("相关章节：使用块"),e("a",E,[o("Working with Blocks"),t(r)])]),A,R,V,e("p",null,[o("相关章节：处理错误"),e("a",D,[o("Dealing with Errors"),t(r)])]),N,I,e("p",null,[o("此外，如果您希望充分利用语言或框架功能，还需要遵循一些约定。例如，属性访问方法必须遵循严格的命名约定，以便与Key-Value Coding "),e("a",H,[o("KVC"),t(r)]),o("或Key-Value Observing "),e("a",M,[o("KVO"),t(r)]),o("等技术一起使用。【这里的KVC和KVO文章看起来很有意思，找时间也在OC进阶中翻译一下吧】")]),e("p",null,[o("相关章节：约定"),e("a",K,[o("Conventions"),t(r)])]),B,G,e("p",null,[o("*"),e("a",X,[o("Start Developing iOS Apps Today (Retired) "),t(r)]),o("*开发iOSAPP须知")]),e("p",null,[o("*"),e("a",L,[o("Start Developing Mac Apps Today "),t(r)]),o("*开发OSXAPP须知")]),e("p",null,[e("em",null,[e("a",F,[o("Concepts in Objective-C Programming"),t(r)])]),o(" 面向对象编程须知")]),q,z,e("p",null,[e("em",null,[e("a",U,[o("Xcode Overview"),t(r)])]),o(" 手把手教你用Xcode")]),e("p",null,[e("em",null,[e("a",J,[o("Objective-C Feature Availability Index"),t(r)])]),o(" OC功能可用性索引")]),e("p",null,[e("em",null,[e("a",Q,[o("Advanced Memory Management Programming Guide"),t(r)])]),o(" 高级内存管理，在没有ARC的情况下要怎么办")]),e("p",null,[e("em",null,[e("a",Y,[o("Objective-C Runtime Programming Guide"),t(r)])]),o(),Z,o("的Runtime机制")]),e("p",null,[e("em",null,[e("a",$,[o("Objective-C Runtime Reference"),t(r)])]),o(" 介绍Runtime相关API的文档")])])}const ae=c(p,[["render",ee],["__file","OC编程指南.html.vue"]]);export{ae as default};

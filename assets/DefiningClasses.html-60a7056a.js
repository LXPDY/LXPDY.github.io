const e=JSON.parse('{"key":"v-be626946","path":"/tec/basic/programWithOC/%E6%96%87%E7%AB%A0%EF%BC%88%E6%9B%B4%E6%96%B0%E4%B8%AD%EF%BC%89/DefiningClasses.html","title":"Defining Classes 定义类","lang":"zh-CN","frontmatter":{"title":"Defining Classes 定义类","order":1,"author":"Fuyuyu","date":"2023-10-22T00:00:00.000Z","category":["文章翻译"],"tag":["Programming with Objective-C","进阶学习"],"footer":"努力努力再努力","copyright":"文章内容归作者所有，不保证完全正确","comment":true,"description":"当你为OS X或iOS编写软件时，你大部分时间都在与对象一起工作。Objective-C中的对象与其他面向对象的编程语言中的对象类似：它们将数据与相关行为封装在一起。【对象object】 一个应用程序构建为一个大型的相互连接的对象生态系统，这些对象相互通信以解决特定问题，比如显示视觉界面、响应用户输入或存储信息。对于OS X或iOS开发，你不需要从头开...","head":[["meta",{"property":"og:url","content":"https://fuyuyu.online/tec/basic/programWithOC/%E6%96%87%E7%AB%A0%EF%BC%88%E6%9B%B4%E6%96%B0%E4%B8%AD%EF%BC%89/DefiningClasses.html"}],["meta",{"property":"og:site_name","content":"Fuyuyuの小站"}],["meta",{"property":"og:title","content":"Defining Classes 定义类"}],["meta",{"property":"og:description","content":"当你为OS X或iOS编写软件时，你大部分时间都在与对象一起工作。Objective-C中的对象与其他面向对象的编程语言中的对象类似：它们将数据与相关行为封装在一起。【对象object】 一个应用程序构建为一个大型的相互连接的对象生态系统，这些对象相互通信以解决特定问题，比如显示视觉界面、响应用户输入或存储信息。对于OS X或iOS开发，你不需要从头开..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-24T04:40:12.000Z"}],["meta",{"property":"article:author","content":"Fuyuyu"}],["meta",{"property":"article:tag","content":"Programming with Objective-C"}],["meta",{"property":"article:tag","content":"进阶学习"}],["meta",{"property":"article:published_time","content":"2023-10-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-24T04:40:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Defining Classes 定义类\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-22T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-24T04:40:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Fuyuyu\\"}]}"]]},"headers":[{"level":2,"title":"Classes Are Blueprints for Objects 类——对象的蓝图","slug":"classes-are-blueprints-for-objects-类——对象的蓝图","link":"#classes-are-blueprints-for-objects-类——对象的蓝图","children":[{"level":3,"title":"Mutability Determines Whether a Represented Value Can Be Changed 可变性——决定了表示的值是否可以更改","slug":"mutability-determines-whether-a-represented-value-can-be-changed-可变性——决定了表示的值是否可以更改","link":"#mutability-determines-whether-a-represented-value-can-be-changed-可变性——决定了表示的值是否可以更改","children":[]},{"level":3,"title":"Classes Inherit from Other Classes 类——从其他类继承","slug":"classes-inherit-from-other-classes-类——从其他类继承","link":"#classes-inherit-from-other-classes-类——从其他类继承","children":[]},{"level":3,"title":"The Root Class Provides Base Functionality 根类——提供基本功能","slug":"the-root-class-provides-base-functionality-根类——提供基本功能","link":"#the-root-class-provides-base-functionality-根类——提供基本功能","children":[]}]},{"level":2,"title":"The Interface for a Class Defines Expected Interactions 类的接口——定义了预期的交互方式","slug":"the-interface-for-a-class-defines-expected-interactions-类的接口——定义了预期的交互方式","link":"#the-interface-for-a-class-defines-expected-interactions-类的接口——定义了预期的交互方式","children":[{"level":3,"title":"Basic Syntax 基本语法","slug":"basic-syntax-基本语法","link":"#basic-syntax-基本语法","children":[]},{"level":3,"title":"Properties Control Access to an Object’s Values 属性——控制对对象值的访问","slug":"properties-control-access-to-an-object-s-values-属性——控制对对象值的访问","link":"#properties-control-access-to-an-object-s-values-属性——控制对对象值的访问","children":[]},{"level":3,"title":"Method Declarations Indicate the Messages an Object Can Receive 方法声明——指示对象可以接收的消息","slug":"method-declarations-indicate-the-messages-an-object-can-receive-方法声明——指示对象可以接收的消息","link":"#method-declarations-indicate-the-messages-an-object-can-receive-方法声明——指示对象可以接收的消息","children":[]},{"level":3,"title":"Class Names Must Be Unique 类名——必须是唯一的","slug":"class-names-must-be-unique-类名——必须是唯一的","link":"#class-names-must-be-unique-类名——必须是唯一的","children":[]}]},{"level":2,"title":"The Implementation of a Class Provides Its Internal Behavior 类的实现 —— 提供了它的内部行为","slug":"the-implementation-of-a-class-provides-its-internal-behavior-类的实现-——-提供了它的内部行为","link":"#the-implementation-of-a-class-provides-its-internal-behavior-类的实现-——-提供了它的内部行为","children":[{"level":3,"title":"Basic Syntax 基本语法","slug":"basic-syntax-基本语法-1","link":"#basic-syntax-基本语法-1","children":[]},{"level":3,"title":"Implementing Methods 实现方法","slug":"implementing-methods-实现方法","link":"#implementing-methods-实现方法","children":[]}]},{"level":2,"title":"Objective-C Classes Are also Objects Objective-C类也是对象","slug":"objective-c-classes-are-also-objects-objective-c类也是对象","link":"#objective-c-classes-are-also-objects-objective-c类也是对象","children":[]},{"level":2,"title":"练习","slug":"练习","link":"#练习","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1698122412000,"updatedTime":1698122412000,"contributors":[{"name":"lx_pdy","email":"1747343655@qq.com","commits":1}]},"readingTime":{"minutes":20.11,"words":6032},"filePathRelative":"tec/basic/programWithOC/文章（更新中）/DefiningClasses.md","localizedDate":"2023年10月22日","autoDesc":true}');export{e as data};
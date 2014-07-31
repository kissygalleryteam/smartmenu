KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('smartmenu', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/smartmenu/2.0.0/']});
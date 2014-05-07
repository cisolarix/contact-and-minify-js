  module.exports = function(grunt) {
  //配置参数
  grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),
     concat: {
         options: {
             separator: ';',
             stripBanners: true
         },
         dist: {
             src: [
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery-1.7.2.min.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery-ui-1.8.21.custom.min.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/bootstrap-transition.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/bootstrap-alert.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/bootstrap-modal.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/bootstrap-dropdown.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/bootstrap-scrollspy.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/bootstrap-tab.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/bootstrap-tooltip.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/bootstrap-popover.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/bootstrap-button.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/bootstrap-collapse.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/bootstrap-carousel.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/bootstrap-typeahead.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/bootstrap-tour.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery.cookie.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/fullcalendar.min.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery.dataTables.min.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/excanvas.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery.flot.min.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery.flot.pie.min.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery.flot.stack.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery.flot.resize.min.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery.chosen.min.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery.uniform.min.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery.colorbox.min.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery.noty.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery.elfinder.min.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery.raty.min.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery.iphone.toggle.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery.autogrow-textarea.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery.history.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/bootstrap-select.min.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery.uploadify-3.1.min.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery.cleditor.min.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery.form.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/v4software.common.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery.multiselect.filter.min.js",
              "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/jquery.multiselect.min.js"
             ],
             dest: "/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/combined-full.js"
         }
     },
     uglify: {
         options: {
         },
         dist: {
             files: {
                 '/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/combined.js': '/Users/bqwang/Documents/11_RELS/01code/portal/Admin/Public/js/combined-full.js'
             }
         }
     }
  });
 
  //载入concat和uglify插件，分别对于合并和压缩
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
 
  //注册任务
  grunt.registerTask('default', ['concat', 'uglify']);
}
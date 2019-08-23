
window.projectVersion = '3.1.0';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:RobBrazier" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="RobBrazier.html">RobBrazier</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:RobBrazier_Piwik" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="RobBrazier/Piwik.html">Piwik</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:RobBrazier_Piwik_Config" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="RobBrazier/Piwik/Config.html">Config</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:RobBrazier_Piwik_Config_Option" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Config/Option.html">Option</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:RobBrazier_Piwik_Exception" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="RobBrazier/Piwik/Exception.html">Exception</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:RobBrazier_Piwik_Exception_PiwikException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Exception/PiwikException.html">PiwikException</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:RobBrazier_Piwik_Facades" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="RobBrazier/Piwik/Facades.html">Facades</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:RobBrazier_Piwik_Facades_Piwik" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Facades/Piwik.html">Piwik</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:RobBrazier_Piwik_Module" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="RobBrazier/Piwik/Module.html">Module</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:RobBrazier_Piwik_Module_APIModule" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Module/APIModule.html">APIModule</a>                    </div>                </li>                            <li data-name="class:RobBrazier_Piwik_Module_ActionsModule" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Module/ActionsModule.html">ActionsModule</a>                    </div>                </li>                            <li data-name="class:RobBrazier_Piwik_Module_EventsModule" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Module/EventsModule.html">EventsModule</a>                    </div>                </li>                            <li data-name="class:RobBrazier_Piwik_Module_LiveModule" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Module/LiveModule.html">LiveModule</a>                    </div>                </li>                            <li data-name="class:RobBrazier_Piwik_Module_Module" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Module/Module.html">Module</a>                    </div>                </li>                            <li data-name="class:RobBrazier_Piwik_Module_ProviderModule" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Module/ProviderModule.html">ProviderModule</a>                    </div>                </li>                            <li data-name="class:RobBrazier_Piwik_Module_ReferrersModule" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Module/ReferrersModule.html">ReferrersModule</a>                    </div>                </li>                            <li data-name="class:RobBrazier_Piwik_Module_SEOModule" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Module/SEOModule.html">SEOModule</a>                    </div>                </li>                            <li data-name="class:RobBrazier_Piwik_Module_SitesManagerModule" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Module/SitesManagerModule.html">SitesManagerModule</a>                    </div>                </li>                            <li data-name="class:RobBrazier_Piwik_Module_VisitorInterestModule" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Module/VisitorInterestModule.html">VisitorInterestModule</a>                    </div>                </li>                            <li data-name="class:RobBrazier_Piwik_Module_VisitsSummaryModule" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Module/VisitsSummaryModule.html">VisitsSummaryModule</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:RobBrazier_Piwik_Query" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="RobBrazier/Piwik/Query.html">Query</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:RobBrazier_Piwik_Query_QueryDate" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Query/QueryDate.html">QueryDate</a>                    </div>                </li>                            <li data-name="class:RobBrazier_Piwik_Query_QueryDates" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Query/QueryDates.html">QueryDates</a>                    </div>                </li>                            <li data-name="class:RobBrazier_Piwik_Query_Url" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Query/Url.html">Url</a>                    </div>                </li>                            <li data-name="class:RobBrazier_Piwik_Query_UrlQueryBuilder" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Query/UrlQueryBuilder.html">UrlQueryBuilder</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:RobBrazier_Piwik_Repository" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="RobBrazier/Piwik/Repository.html">Repository</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:RobBrazier_Piwik_Repository_Config" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="RobBrazier/Piwik/Repository/Config.html">Config</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:RobBrazier_Piwik_Repository_Config_FileConfigRepository" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="RobBrazier/Piwik/Repository/Config/FileConfigRepository.html">FileConfigRepository</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:RobBrazier_Piwik_Repository_Request" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="RobBrazier/Piwik/Repository/Request.html">Request</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:RobBrazier_Piwik_Repository_Request_GuzzleRequestRepository" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="RobBrazier/Piwik/Repository/Request/GuzzleRequestRepository.html">GuzzleRequestRepository</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:RobBrazier_Piwik_Repository_ConfigRepository" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Repository/ConfigRepository.html">ConfigRepository</a>                    </div>                </li>                            <li data-name="class:RobBrazier_Piwik_Repository_RequestRepository" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Repository/RequestRepository.html">RequestRepository</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:RobBrazier_Piwik_Request" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="RobBrazier/Piwik/Request.html">Request</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:RobBrazier_Piwik_Request_RequestOptions" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Request/RequestOptions.html">RequestOptions</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:RobBrazier_Piwik_Traits" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="RobBrazier/Piwik/Traits.html">Traits</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:RobBrazier_Piwik_Traits_ConfigTrait" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Traits/ConfigTrait.html">ConfigTrait</a>                    </div>                </li>                            <li data-name="class:RobBrazier_Piwik_Traits_DateTrait" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Traits/DateTrait.html">DateTrait</a>                    </div>                </li>                            <li data-name="class:RobBrazier_Piwik_Traits_FormatTrait" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="RobBrazier/Piwik/Traits/FormatTrait.html">FormatTrait</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:RobBrazier_Piwik_Piwik" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RobBrazier/Piwik/Piwik.html">Piwik</a>                    </div>                </li>                            <li data-name="class:RobBrazier_Piwik_PiwikServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="RobBrazier/Piwik/PiwikServiceProvider.html">PiwikServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "RobBrazier.html", "name": "RobBrazier", "doc": "Namespace RobBrazier"},{"type": "Namespace", "link": "RobBrazier/Piwik.html", "name": "RobBrazier\\Piwik", "doc": "Namespace RobBrazier\\Piwik"},{"type": "Namespace", "link": "RobBrazier/Piwik/Config.html", "name": "RobBrazier\\Piwik\\Config", "doc": "Namespace RobBrazier\\Piwik\\Config"},{"type": "Namespace", "link": "RobBrazier/Piwik/Exception.html", "name": "RobBrazier\\Piwik\\Exception", "doc": "Namespace RobBrazier\\Piwik\\Exception"},{"type": "Namespace", "link": "RobBrazier/Piwik/Facades.html", "name": "RobBrazier\\Piwik\\Facades", "doc": "Namespace RobBrazier\\Piwik\\Facades"},{"type": "Namespace", "link": "RobBrazier/Piwik/Module.html", "name": "RobBrazier\\Piwik\\Module", "doc": "Namespace RobBrazier\\Piwik\\Module"},{"type": "Namespace", "link": "RobBrazier/Piwik/Query.html", "name": "RobBrazier\\Piwik\\Query", "doc": "Namespace RobBrazier\\Piwik\\Query"},{"type": "Namespace", "link": "RobBrazier/Piwik/Repository.html", "name": "RobBrazier\\Piwik\\Repository", "doc": "Namespace RobBrazier\\Piwik\\Repository"},{"type": "Namespace", "link": "RobBrazier/Piwik/Repository/Config.html", "name": "RobBrazier\\Piwik\\Repository\\Config", "doc": "Namespace RobBrazier\\Piwik\\Repository\\Config"},{"type": "Namespace", "link": "RobBrazier/Piwik/Repository/Request.html", "name": "RobBrazier\\Piwik\\Repository\\Request", "doc": "Namespace RobBrazier\\Piwik\\Repository\\Request"},{"type": "Namespace", "link": "RobBrazier/Piwik/Request.html", "name": "RobBrazier\\Piwik\\Request", "doc": "Namespace RobBrazier\\Piwik\\Request"},{"type": "Namespace", "link": "RobBrazier/Piwik/Traits.html", "name": "RobBrazier\\Piwik\\Traits", "doc": "Namespace RobBrazier\\Piwik\\Traits"},
            {"type": "Interface", "fromName": "RobBrazier\\Piwik\\Repository", "fromLink": "RobBrazier/Piwik/Repository.html", "link": "RobBrazier/Piwik/Repository/ConfigRepository.html", "name": "RobBrazier\\Piwik\\Repository\\ConfigRepository", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Repository\\ConfigRepository", "fromLink": "RobBrazier/Piwik/Repository/ConfigRepository.html", "link": "RobBrazier/Piwik/Repository/ConfigRepository.html#method_get", "name": "RobBrazier\\Piwik\\Repository\\ConfigRepository::get", "doc": "&quot;Retrieve a configuration item.&quot;"},
            
            {"type": "Interface", "fromName": "RobBrazier\\Piwik\\Repository", "fromLink": "RobBrazier/Piwik/Repository.html", "link": "RobBrazier/Piwik/Repository/RequestRepository.html", "name": "RobBrazier\\Piwik\\Repository\\RequestRepository", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Repository\\RequestRepository", "fromLink": "RobBrazier/Piwik/Repository/RequestRepository.html", "link": "RobBrazier/Piwik/Repository/RequestRepository.html#method_send", "name": "RobBrazier\\Piwik\\Repository\\RequestRepository::send", "doc": "&quot;Send a request to the Piwik API.&quot;"},
            
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Config", "fromLink": "RobBrazier/Piwik/Config.html", "link": "RobBrazier/Piwik/Config/Option.html", "name": "RobBrazier\\Piwik\\Config\\Option", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Exception", "fromLink": "RobBrazier/Piwik/Exception.html", "link": "RobBrazier/Piwik/Exception/PiwikException.html", "name": "RobBrazier\\Piwik\\Exception\\PiwikException", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Facades", "fromLink": "RobBrazier/Piwik/Facades.html", "link": "RobBrazier/Piwik/Facades/Piwik.html", "name": "RobBrazier\\Piwik\\Facades\\Piwik", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Facades\\Piwik", "fromLink": "RobBrazier/Piwik/Facades/Piwik.html", "link": "RobBrazier/Piwik/Facades/Piwik.html#method_getFacadeAccessor", "name": "RobBrazier\\Piwik\\Facades\\Piwik::getFacadeAccessor", "doc": "&quot;Get the registered name of the component.&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Module", "fromLink": "RobBrazier/Piwik/Module.html", "link": "RobBrazier/Piwik/Module/APIModule.html", "name": "RobBrazier\\Piwik\\Module\\APIModule", "doc": "&quot;Class APIModule.&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\APIModule", "fromLink": "RobBrazier/Piwik/Module/APIModule.html", "link": "RobBrazier/Piwik/Module/APIModule.html#method_getPiwikVersion", "name": "RobBrazier\\Piwik\\Module\\APIModule::getPiwikVersion", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\APIModule", "fromLink": "RobBrazier/Piwik/Module/APIModule.html", "link": "RobBrazier/Piwik/Module/APIModule.html#method_getIpFromHeader", "name": "RobBrazier\\Piwik\\Module\\APIModule::getIpFromHeader", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\APIModule", "fromLink": "RobBrazier/Piwik/Module/APIModule.html", "link": "RobBrazier/Piwik/Module/APIModule.html#method_getSettings", "name": "RobBrazier\\Piwik\\Module\\APIModule::getSettings", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\APIModule", "fromLink": "RobBrazier/Piwik/Module/APIModule.html", "link": "RobBrazier/Piwik/Module/APIModule.html#method_getSegmentsMetadata", "name": "RobBrazier\\Piwik\\Module\\APIModule::getSegmentsMetadata", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\APIModule", "fromLink": "RobBrazier/Piwik/Module/APIModule.html", "link": "RobBrazier/Piwik/Module/APIModule.html#method_getMetadata", "name": "RobBrazier\\Piwik\\Module\\APIModule::getMetadata", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\APIModule", "fromLink": "RobBrazier/Piwik/Module/APIModule.html", "link": "RobBrazier/Piwik/Module/APIModule.html#method_getReportMetadata", "name": "RobBrazier\\Piwik\\Module\\APIModule::getReportMetadata", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\APIModule", "fromLink": "RobBrazier/Piwik/Module/APIModule.html", "link": "RobBrazier/Piwik/Module/APIModule.html#method_getProcessedReport", "name": "RobBrazier\\Piwik\\Module\\APIModule::getProcessedReport", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\APIModule", "fromLink": "RobBrazier/Piwik/Module/APIModule.html", "link": "RobBrazier/Piwik/Module/APIModule.html#method_getReportPagesMetadata", "name": "RobBrazier\\Piwik\\Module\\APIModule::getReportPagesMetadata", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\APIModule", "fromLink": "RobBrazier/Piwik/Module/APIModule.html", "link": "RobBrazier/Piwik/Module/APIModule.html#method_getWidgetMetadata", "name": "RobBrazier\\Piwik\\Module\\APIModule::getWidgetMetadata", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\APIModule", "fromLink": "RobBrazier/Piwik/Module/APIModule.html", "link": "RobBrazier/Piwik/Module/APIModule.html#method_get", "name": "RobBrazier\\Piwik\\Module\\APIModule::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\APIModule", "fromLink": "RobBrazier/Piwik/Module/APIModule.html", "link": "RobBrazier/Piwik/Module/APIModule.html#method_getRowEvolution", "name": "RobBrazier\\Piwik\\Module\\APIModule::getRowEvolution", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Module", "fromLink": "RobBrazier/Piwik/Module.html", "link": "RobBrazier/Piwik/Module/ActionsModule.html", "name": "RobBrazier\\Piwik\\Module\\ActionsModule", "doc": "&quot;Class ActionsModule.&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ActionsModule", "fromLink": "RobBrazier/Piwik/Module/ActionsModule.html", "link": "RobBrazier/Piwik/Module/ActionsModule.html#method_get", "name": "RobBrazier\\Piwik\\Module\\ActionsModule::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ActionsModule", "fromLink": "RobBrazier/Piwik/Module/ActionsModule.html", "link": "RobBrazier/Piwik/Module/ActionsModule.html#method_getPageUrls", "name": "RobBrazier\\Piwik\\Module\\ActionsModule::getPageUrls", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ActionsModule", "fromLink": "RobBrazier/Piwik/Module/ActionsModule.html", "link": "RobBrazier/Piwik/Module/ActionsModule.html#method_getPageUrlsFollowingSiteSearch", "name": "RobBrazier\\Piwik\\Module\\ActionsModule::getPageUrlsFollowingSiteSearch", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ActionsModule", "fromLink": "RobBrazier/Piwik/Module/ActionsModule.html", "link": "RobBrazier/Piwik/Module/ActionsModule.html#method_getPageTitlesFollowingSiteSearch", "name": "RobBrazier\\Piwik\\Module\\ActionsModule::getPageTitlesFollowingSiteSearch", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ActionsModule", "fromLink": "RobBrazier/Piwik/Module/ActionsModule.html", "link": "RobBrazier/Piwik/Module/ActionsModule.html#method_getEntryPageUrls", "name": "RobBrazier\\Piwik\\Module\\ActionsModule::getEntryPageUrls", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ActionsModule", "fromLink": "RobBrazier/Piwik/Module/ActionsModule.html", "link": "RobBrazier/Piwik/Module/ActionsModule.html#method_getExitPageUrls", "name": "RobBrazier\\Piwik\\Module\\ActionsModule::getExitPageUrls", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ActionsModule", "fromLink": "RobBrazier/Piwik/Module/ActionsModule.html", "link": "RobBrazier/Piwik/Module/ActionsModule.html#method_getPageUrl", "name": "RobBrazier\\Piwik\\Module\\ActionsModule::getPageUrl", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ActionsModule", "fromLink": "RobBrazier/Piwik/Module/ActionsModule.html", "link": "RobBrazier/Piwik/Module/ActionsModule.html#method_getPageTitles", "name": "RobBrazier\\Piwik\\Module\\ActionsModule::getPageTitles", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ActionsModule", "fromLink": "RobBrazier/Piwik/Module/ActionsModule.html", "link": "RobBrazier/Piwik/Module/ActionsModule.html#method_getEntryPageTitles", "name": "RobBrazier\\Piwik\\Module\\ActionsModule::getEntryPageTitles", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ActionsModule", "fromLink": "RobBrazier/Piwik/Module/ActionsModule.html", "link": "RobBrazier/Piwik/Module/ActionsModule.html#method_getExitPageTitles", "name": "RobBrazier\\Piwik\\Module\\ActionsModule::getExitPageTitles", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ActionsModule", "fromLink": "RobBrazier/Piwik/Module/ActionsModule.html", "link": "RobBrazier/Piwik/Module/ActionsModule.html#method_getPageTitle", "name": "RobBrazier\\Piwik\\Module\\ActionsModule::getPageTitle", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ActionsModule", "fromLink": "RobBrazier/Piwik/Module/ActionsModule.html", "link": "RobBrazier/Piwik/Module/ActionsModule.html#method_getDownloads", "name": "RobBrazier\\Piwik\\Module\\ActionsModule::getDownloads", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ActionsModule", "fromLink": "RobBrazier/Piwik/Module/ActionsModule.html", "link": "RobBrazier/Piwik/Module/ActionsModule.html#method_getDownload", "name": "RobBrazier\\Piwik\\Module\\ActionsModule::getDownload", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ActionsModule", "fromLink": "RobBrazier/Piwik/Module/ActionsModule.html", "link": "RobBrazier/Piwik/Module/ActionsModule.html#method_getOutlinks", "name": "RobBrazier\\Piwik\\Module\\ActionsModule::getOutlinks", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ActionsModule", "fromLink": "RobBrazier/Piwik/Module/ActionsModule.html", "link": "RobBrazier/Piwik/Module/ActionsModule.html#method_getOutlink", "name": "RobBrazier\\Piwik\\Module\\ActionsModule::getOutlink", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ActionsModule", "fromLink": "RobBrazier/Piwik/Module/ActionsModule.html", "link": "RobBrazier/Piwik/Module/ActionsModule.html#method_getSiteSearchKeywords", "name": "RobBrazier\\Piwik\\Module\\ActionsModule::getSiteSearchKeywords", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ActionsModule", "fromLink": "RobBrazier/Piwik/Module/ActionsModule.html", "link": "RobBrazier/Piwik/Module/ActionsModule.html#method_getSiteSearchNoResultKeywords", "name": "RobBrazier\\Piwik\\Module\\ActionsModule::getSiteSearchNoResultKeywords", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ActionsModule", "fromLink": "RobBrazier/Piwik/Module/ActionsModule.html", "link": "RobBrazier/Piwik/Module/ActionsModule.html#method_getSiteSearchCategories", "name": "RobBrazier\\Piwik\\Module\\ActionsModule::getSiteSearchCategories", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Module", "fromLink": "RobBrazier/Piwik/Module.html", "link": "RobBrazier/Piwik/Module/EventsModule.html", "name": "RobBrazier\\Piwik\\Module\\EventsModule", "doc": "&quot;Class EventsModule.&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\EventsModule", "fromLink": "RobBrazier/Piwik/Module/EventsModule.html", "link": "RobBrazier/Piwik/Module/EventsModule.html#method_getCategory", "name": "RobBrazier\\Piwik\\Module\\EventsModule::getCategory", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\EventsModule", "fromLink": "RobBrazier/Piwik/Module/EventsModule.html", "link": "RobBrazier/Piwik/Module/EventsModule.html#method_getAction", "name": "RobBrazier\\Piwik\\Module\\EventsModule::getAction", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\EventsModule", "fromLink": "RobBrazier/Piwik/Module/EventsModule.html", "link": "RobBrazier/Piwik/Module/EventsModule.html#method_getName", "name": "RobBrazier\\Piwik\\Module\\EventsModule::getName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\EventsModule", "fromLink": "RobBrazier/Piwik/Module/EventsModule.html", "link": "RobBrazier/Piwik/Module/EventsModule.html#method_getActionFromCategoryId", "name": "RobBrazier\\Piwik\\Module\\EventsModule::getActionFromCategoryId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\EventsModule", "fromLink": "RobBrazier/Piwik/Module/EventsModule.html", "link": "RobBrazier/Piwik/Module/EventsModule.html#method_getNameFromCategoryId", "name": "RobBrazier\\Piwik\\Module\\EventsModule::getNameFromCategoryId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\EventsModule", "fromLink": "RobBrazier/Piwik/Module/EventsModule.html", "link": "RobBrazier/Piwik/Module/EventsModule.html#method_getCategoryFromActionId", "name": "RobBrazier\\Piwik\\Module\\EventsModule::getCategoryFromActionId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\EventsModule", "fromLink": "RobBrazier/Piwik/Module/EventsModule.html", "link": "RobBrazier/Piwik/Module/EventsModule.html#method_getNameFromActionId", "name": "RobBrazier\\Piwik\\Module\\EventsModule::getNameFromActionId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\EventsModule", "fromLink": "RobBrazier/Piwik/Module/EventsModule.html", "link": "RobBrazier/Piwik/Module/EventsModule.html#method_getActionFromNameId", "name": "RobBrazier\\Piwik\\Module\\EventsModule::getActionFromNameId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\EventsModule", "fromLink": "RobBrazier/Piwik/Module/EventsModule.html", "link": "RobBrazier/Piwik/Module/EventsModule.html#method_getCategoryFromNameId", "name": "RobBrazier\\Piwik\\Module\\EventsModule::getCategoryFromNameId", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Module", "fromLink": "RobBrazier/Piwik/Module.html", "link": "RobBrazier/Piwik/Module/LiveModule.html", "name": "RobBrazier\\Piwik\\Module\\LiveModule", "doc": "&quot;Class LiveModule.&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\LiveModule", "fromLink": "RobBrazier/Piwik/Module/LiveModule.html", "link": "RobBrazier/Piwik/Module/LiveModule.html#method_getCounters", "name": "RobBrazier\\Piwik\\Module\\LiveModule::getCounters", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\LiveModule", "fromLink": "RobBrazier/Piwik/Module/LiveModule.html", "link": "RobBrazier/Piwik/Module/LiveModule.html#method_getLastVisitsDetails", "name": "RobBrazier\\Piwik\\Module\\LiveModule::getLastVisitsDetails", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\LiveModule", "fromLink": "RobBrazier/Piwik/Module/LiveModule.html", "link": "RobBrazier/Piwik/Module/LiveModule.html#method_getLastVisitsDetailsParsed", "name": "RobBrazier\\Piwik\\Module\\LiveModule::getLastVisitsDetailsParsed", "doc": "&quot;last_visits_parsed\nGet information about last 10 visits (ip, time, country, pages, etc.) in a formatted array\nwith GeoIP information if enabled.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\LiveModule", "fromLink": "RobBrazier/Piwik/Module/LiveModule.html", "link": "RobBrazier/Piwik/Module/LiveModule.html#method_getVisitorProfile", "name": "RobBrazier\\Piwik\\Module\\LiveModule::getVisitorProfile", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\LiveModule", "fromLink": "RobBrazier/Piwik/Module/LiveModule.html", "link": "RobBrazier/Piwik/Module/LiveModule.html#method_getMostRecentVisitorId", "name": "RobBrazier\\Piwik\\Module\\LiveModule::getMostRecentVisitorId", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Module", "fromLink": "RobBrazier/Piwik/Module.html", "link": "RobBrazier/Piwik/Module/Module.html", "name": "RobBrazier\\Piwik\\Module\\Module", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\Module", "fromLink": "RobBrazier/Piwik/Module/Module.html", "link": "RobBrazier/Piwik/Module/Module.html#method___construct", "name": "RobBrazier\\Piwik\\Module\\Module::__construct", "doc": "&quot;Module constructor.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\Module", "fromLink": "RobBrazier/Piwik/Module/Module.html", "link": "RobBrazier/Piwik/Module/Module.html#method_getOptions", "name": "RobBrazier\\Piwik\\Module\\Module::getOptions", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Module", "fromLink": "RobBrazier/Piwik/Module.html", "link": "RobBrazier/Piwik/Module/ProviderModule.html", "name": "RobBrazier\\Piwik\\Module\\ProviderModule", "doc": "&quot;Class ProviderModule.&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ProviderModule", "fromLink": "RobBrazier/Piwik/Module/ProviderModule.html", "link": "RobBrazier/Piwik/Module/ProviderModule.html#method_getProvider", "name": "RobBrazier\\Piwik\\Module\\ProviderModule::getProvider", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Module", "fromLink": "RobBrazier/Piwik/Module.html", "link": "RobBrazier/Piwik/Module/ReferrersModule.html", "name": "RobBrazier\\Piwik\\Module\\ReferrersModule", "doc": "&quot;Class ReferrersModule.&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ReferrersModule", "fromLink": "RobBrazier/Piwik/Module/ReferrersModule.html", "link": "RobBrazier/Piwik/Module/ReferrersModule.html#method_getReferrerType", "name": "RobBrazier\\Piwik\\Module\\ReferrersModule::getReferrerType", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ReferrersModule", "fromLink": "RobBrazier/Piwik/Module/ReferrersModule.html", "link": "RobBrazier/Piwik/Module/ReferrersModule.html#method_getAll", "name": "RobBrazier\\Piwik\\Module\\ReferrersModule::getAll", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ReferrersModule", "fromLink": "RobBrazier/Piwik/Module/ReferrersModule.html", "link": "RobBrazier/Piwik/Module/ReferrersModule.html#method_getKeywords", "name": "RobBrazier\\Piwik\\Module\\ReferrersModule::getKeywords", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ReferrersModule", "fromLink": "RobBrazier/Piwik/Module/ReferrersModule.html", "link": "RobBrazier/Piwik/Module/ReferrersModule.html#method_getKeywordsForPageUrl", "name": "RobBrazier\\Piwik\\Module\\ReferrersModule::getKeywordsForPageUrl", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ReferrersModule", "fromLink": "RobBrazier/Piwik/Module/ReferrersModule.html", "link": "RobBrazier/Piwik/Module/ReferrersModule.html#method_getKeywordsForPageTitle", "name": "RobBrazier\\Piwik\\Module\\ReferrersModule::getKeywordsForPageTitle", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ReferrersModule", "fromLink": "RobBrazier/Piwik/Module/ReferrersModule.html", "link": "RobBrazier/Piwik/Module/ReferrersModule.html#method_getSearchEnginesFromKeywordId", "name": "RobBrazier\\Piwik\\Module\\ReferrersModule::getSearchEnginesFromKeywordId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ReferrersModule", "fromLink": "RobBrazier/Piwik/Module/ReferrersModule.html", "link": "RobBrazier/Piwik/Module/ReferrersModule.html#method_getSearchEngines", "name": "RobBrazier\\Piwik\\Module\\ReferrersModule::getSearchEngines", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ReferrersModule", "fromLink": "RobBrazier/Piwik/Module/ReferrersModule.html", "link": "RobBrazier/Piwik/Module/ReferrersModule.html#method_getKeywordsFromSearchEngineId", "name": "RobBrazier\\Piwik\\Module\\ReferrersModule::getKeywordsFromSearchEngineId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ReferrersModule", "fromLink": "RobBrazier/Piwik/Module/ReferrersModule.html", "link": "RobBrazier/Piwik/Module/ReferrersModule.html#method_getCampaigns", "name": "RobBrazier\\Piwik\\Module\\ReferrersModule::getCampaigns", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ReferrersModule", "fromLink": "RobBrazier/Piwik/Module/ReferrersModule.html", "link": "RobBrazier/Piwik/Module/ReferrersModule.html#method_getKeywordsFromCampaignId", "name": "RobBrazier\\Piwik\\Module\\ReferrersModule::getKeywordsFromCampaignId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ReferrersModule", "fromLink": "RobBrazier/Piwik/Module/ReferrersModule.html", "link": "RobBrazier/Piwik/Module/ReferrersModule.html#method_getWebsites", "name": "RobBrazier\\Piwik\\Module\\ReferrersModule::getWebsites", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ReferrersModule", "fromLink": "RobBrazier/Piwik/Module/ReferrersModule.html", "link": "RobBrazier/Piwik/Module/ReferrersModule.html#method_getUrlsFromWebsiteId", "name": "RobBrazier\\Piwik\\Module\\ReferrersModule::getUrlsFromWebsiteId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ReferrersModule", "fromLink": "RobBrazier/Piwik/Module/ReferrersModule.html", "link": "RobBrazier/Piwik/Module/ReferrersModule.html#method_getSocials", "name": "RobBrazier\\Piwik\\Module\\ReferrersModule::getSocials", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ReferrersModule", "fromLink": "RobBrazier/Piwik/Module/ReferrersModule.html", "link": "RobBrazier/Piwik/Module/ReferrersModule.html#method_getUrlsForSocial", "name": "RobBrazier\\Piwik\\Module\\ReferrersModule::getUrlsForSocial", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ReferrersModule", "fromLink": "RobBrazier/Piwik/Module/ReferrersModule.html", "link": "RobBrazier/Piwik/Module/ReferrersModule.html#method_getNumberOfDistinctSearchEngines", "name": "RobBrazier\\Piwik\\Module\\ReferrersModule::getNumberOfDistinctSearchEngines", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ReferrersModule", "fromLink": "RobBrazier/Piwik/Module/ReferrersModule.html", "link": "RobBrazier/Piwik/Module/ReferrersModule.html#method_getNumberOfDistinctKeywords", "name": "RobBrazier\\Piwik\\Module\\ReferrersModule::getNumberOfDistinctKeywords", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ReferrersModule", "fromLink": "RobBrazier/Piwik/Module/ReferrersModule.html", "link": "RobBrazier/Piwik/Module/ReferrersModule.html#method_getNumberOfDistinctCampaigns", "name": "RobBrazier\\Piwik\\Module\\ReferrersModule::getNumberOfDistinctCampaigns", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ReferrersModule", "fromLink": "RobBrazier/Piwik/Module/ReferrersModule.html", "link": "RobBrazier/Piwik/Module/ReferrersModule.html#method_getNumberOfDistinctWebsites", "name": "RobBrazier\\Piwik\\Module\\ReferrersModule::getNumberOfDistinctWebsites", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\ReferrersModule", "fromLink": "RobBrazier/Piwik/Module/ReferrersModule.html", "link": "RobBrazier/Piwik/Module/ReferrersModule.html#method_getNumberOfDistinctWebsitesUrls", "name": "RobBrazier\\Piwik\\Module\\ReferrersModule::getNumberOfDistinctWebsitesUrls", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Module", "fromLink": "RobBrazier/Piwik/Module.html", "link": "RobBrazier/Piwik/Module/SEOModule.html", "name": "RobBrazier\\Piwik\\Module\\SEOModule", "doc": "&quot;Class SEOModule.&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\SEOModule", "fromLink": "RobBrazier/Piwik/Module/SEOModule.html", "link": "RobBrazier/Piwik/Module/SEOModule.html#method___construct", "name": "RobBrazier\\Piwik\\Module\\SEOModule::__construct", "doc": "&quot;SEOModule constructor.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\SEOModule", "fromLink": "RobBrazier/Piwik/Module/SEOModule.html", "link": "RobBrazier/Piwik/Module/SEOModule.html#method_getRank", "name": "RobBrazier\\Piwik\\Module\\SEOModule::getRank", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\SEOModule", "fromLink": "RobBrazier/Piwik/Module/SEOModule.html", "link": "RobBrazier/Piwik/Module/SEOModule.html#method_getRankFromSiteId", "name": "RobBrazier\\Piwik\\Module\\SEOModule::getRankFromSiteId", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Module", "fromLink": "RobBrazier/Piwik/Module.html", "link": "RobBrazier/Piwik/Module/SitesManagerModule.html", "name": "RobBrazier\\Piwik\\Module\\SitesManagerModule", "doc": "&quot;Class SitesManagerModule.&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\SitesManagerModule", "fromLink": "RobBrazier/Piwik/Module/SitesManagerModule.html", "link": "RobBrazier/Piwik/Module/SitesManagerModule.html#method_getSitesFromGroup", "name": "RobBrazier\\Piwik\\Module\\SitesManagerModule::getSitesFromGroup", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\SitesManagerModule", "fromLink": "RobBrazier/Piwik/Module/SitesManagerModule.html", "link": "RobBrazier/Piwik/Module/SitesManagerModule.html#method_getSiteGroups", "name": "RobBrazier\\Piwik\\Module\\SitesManagerModule::getSiteGroups", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\SitesManagerModule", "fromLink": "RobBrazier/Piwik/Module/SitesManagerModule.html", "link": "RobBrazier/Piwik/Module/SitesManagerModule.html#method_getSitesFromId", "name": "RobBrazier\\Piwik\\Module\\SitesManagerModule::getSitesFromId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\SitesManagerModule", "fromLink": "RobBrazier/Piwik/Module/SitesManagerModule.html", "link": "RobBrazier/Piwik/Module/SitesManagerModule.html#method_getSiteUrlsFromId", "name": "RobBrazier\\Piwik\\Module\\SitesManagerModule::getSiteUrlsFromId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\SitesManagerModule", "fromLink": "RobBrazier/Piwik/Module/SitesManagerModule.html", "link": "RobBrazier/Piwik/Module/SitesManagerModule.html#method_getAllSites", "name": "RobBrazier\\Piwik\\Module\\SitesManagerModule::getAllSites", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\SitesManagerModule", "fromLink": "RobBrazier/Piwik/Module/SitesManagerModule.html", "link": "RobBrazier/Piwik/Module/SitesManagerModule.html#method_getAllSitesId", "name": "RobBrazier\\Piwik\\Module\\SitesManagerModule::getAllSitesId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\SitesManagerModule", "fromLink": "RobBrazier/Piwik/Module/SitesManagerModule.html", "link": "RobBrazier/Piwik/Module/SitesManagerModule.html#method_getSitesWithAdminAccess", "name": "RobBrazier\\Piwik\\Module\\SitesManagerModule::getSitesWithAdminAccess", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\SitesManagerModule", "fromLink": "RobBrazier/Piwik/Module/SitesManagerModule.html", "link": "RobBrazier/Piwik/Module/SitesManagerModule.html#method_getSitesWithViewAccess", "name": "RobBrazier\\Piwik\\Module\\SitesManagerModule::getSitesWithViewAccess", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\SitesManagerModule", "fromLink": "RobBrazier/Piwik/Module/SitesManagerModule.html", "link": "RobBrazier/Piwik/Module/SitesManagerModule.html#method_getSitesWithAtLeastViewAccess", "name": "RobBrazier\\Piwik\\Module\\SitesManagerModule::getSitesWithAtLeastViewAccess", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\SitesManagerModule", "fromLink": "RobBrazier/Piwik/Module/SitesManagerModule.html", "link": "RobBrazier/Piwik/Module/SitesManagerModule.html#method_getSitesIdWithAdminAccess", "name": "RobBrazier\\Piwik\\Module\\SitesManagerModule::getSitesIdWithAdminAccess", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\SitesManagerModule", "fromLink": "RobBrazier/Piwik/Module/SitesManagerModule.html", "link": "RobBrazier/Piwik/Module/SitesManagerModule.html#method_getSitesIdWithViewAccess", "name": "RobBrazier\\Piwik\\Module\\SitesManagerModule::getSitesIdWithViewAccess", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\SitesManagerModule", "fromLink": "RobBrazier/Piwik/Module/SitesManagerModule.html", "link": "RobBrazier/Piwik/Module/SitesManagerModule.html#method_getSitesIdWithAtLeastViewAccess", "name": "RobBrazier\\Piwik\\Module\\SitesManagerModule::getSitesIdWithAtLeastViewAccess", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\SitesManagerModule", "fromLink": "RobBrazier/Piwik/Module/SitesManagerModule.html", "link": "RobBrazier/Piwik/Module/SitesManagerModule.html#method_getSitesIdFromSiteUrl", "name": "RobBrazier\\Piwik\\Module\\SitesManagerModule::getSitesIdFromSiteUrl", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\SitesManagerModule", "fromLink": "RobBrazier/Piwik/Module/SitesManagerModule.html", "link": "RobBrazier/Piwik/Module/SitesManagerModule.html#method_addSite", "name": "RobBrazier\\Piwik\\Module\\SitesManagerModule::addSite", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Module", "fromLink": "RobBrazier/Piwik/Module.html", "link": "RobBrazier/Piwik/Module/VisitorInterestModule.html", "name": "RobBrazier\\Piwik\\Module\\VisitorInterestModule", "doc": "&quot;Class VisitorInterestModule.&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\VisitorInterestModule", "fromLink": "RobBrazier/Piwik/Module/VisitorInterestModule.html", "link": "RobBrazier/Piwik/Module/VisitorInterestModule.html#method_getNumberOfVisitsPerVisitDuration", "name": "RobBrazier\\Piwik\\Module\\VisitorInterestModule::getNumberOfVisitsPerVisitDuration", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\VisitorInterestModule", "fromLink": "RobBrazier/Piwik/Module/VisitorInterestModule.html", "link": "RobBrazier/Piwik/Module/VisitorInterestModule.html#method_getNumberOfVisitsPerPage", "name": "RobBrazier\\Piwik\\Module\\VisitorInterestModule::getNumberOfVisitsPerPage", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\VisitorInterestModule", "fromLink": "RobBrazier/Piwik/Module/VisitorInterestModule.html", "link": "RobBrazier/Piwik/Module/VisitorInterestModule.html#method_getNumberOfVisitsByDaysSinceLast", "name": "RobBrazier\\Piwik\\Module\\VisitorInterestModule::getNumberOfVisitsByDaysSinceLast", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\VisitorInterestModule", "fromLink": "RobBrazier/Piwik/Module/VisitorInterestModule.html", "link": "RobBrazier/Piwik/Module/VisitorInterestModule.html#method_getNumberOfVisitsByVisitCount", "name": "RobBrazier\\Piwik\\Module\\VisitorInterestModule::getNumberOfVisitsByVisitCount", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Module", "fromLink": "RobBrazier/Piwik/Module.html", "link": "RobBrazier/Piwik/Module/VisitsSummaryModule.html", "name": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule", "doc": "&quot;Class VisitsSummaryModule.&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule", "fromLink": "RobBrazier/Piwik/Module/VisitsSummaryModule.html", "link": "RobBrazier/Piwik/Module/VisitsSummaryModule.html#method_get", "name": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule", "fromLink": "RobBrazier/Piwik/Module/VisitsSummaryModule.html", "link": "RobBrazier/Piwik/Module/VisitsSummaryModule.html#method_getVisits", "name": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule::getVisits", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule", "fromLink": "RobBrazier/Piwik/Module/VisitsSummaryModule.html", "link": "RobBrazier/Piwik/Module/VisitsSummaryModule.html#method_getUniqueVisitors", "name": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule::getUniqueVisitors", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule", "fromLink": "RobBrazier/Piwik/Module/VisitsSummaryModule.html", "link": "RobBrazier/Piwik/Module/VisitsSummaryModule.html#method_getUsers", "name": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule::getUsers", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule", "fromLink": "RobBrazier/Piwik/Module/VisitsSummaryModule.html", "link": "RobBrazier/Piwik/Module/VisitsSummaryModule.html#method_getActions", "name": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule::getActions", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule", "fromLink": "RobBrazier/Piwik/Module/VisitsSummaryModule.html", "link": "RobBrazier/Piwik/Module/VisitsSummaryModule.html#method_getMaxActions", "name": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule::getMaxActions", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule", "fromLink": "RobBrazier/Piwik/Module/VisitsSummaryModule.html", "link": "RobBrazier/Piwik/Module/VisitsSummaryModule.html#method_getBounceCount", "name": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule::getBounceCount", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule", "fromLink": "RobBrazier/Piwik/Module/VisitsSummaryModule.html", "link": "RobBrazier/Piwik/Module/VisitsSummaryModule.html#method_getVisitsConverted", "name": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule::getVisitsConverted", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule", "fromLink": "RobBrazier/Piwik/Module/VisitsSummaryModule.html", "link": "RobBrazier/Piwik/Module/VisitsSummaryModule.html#method_getSumVisitsLength", "name": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule::getSumVisitsLength", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule", "fromLink": "RobBrazier/Piwik/Module/VisitsSummaryModule.html", "link": "RobBrazier/Piwik/Module/VisitsSummaryModule.html#method_getSumVisitsLengthPretty", "name": "RobBrazier\\Piwik\\Module\\VisitsSummaryModule::getSumVisitsLengthPretty", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik", "fromLink": "RobBrazier/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html", "name": "RobBrazier\\Piwik\\Piwik", "doc": "&quot;Class Piwik.&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method___construct", "name": "RobBrazier\\Piwik\\Piwik::__construct", "doc": "&quot;Piwik constructor.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_convertUrl", "name": "RobBrazier\\Piwik\\Piwik::convertUrl", "doc": "&quot;Convert URL from HTTP to HTTPS and vice versa.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_getActions", "name": "RobBrazier\\Piwik\\Piwik::getActions", "doc": "&quot;Initialise the Actions module.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_getAPI", "name": "RobBrazier\\Piwik\\Piwik::getAPI", "doc": "&quot;Initialise the API Module.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_getEvents", "name": "RobBrazier\\Piwik\\Piwik::getEvents", "doc": "&quot;Initialise the Events Module.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_getLive", "name": "RobBrazier\\Piwik\\Piwik::getLive", "doc": "&quot;Initialise the Live Module.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_getProvider", "name": "RobBrazier\\Piwik\\Piwik::getProvider", "doc": "&quot;Initialise the Provider Module.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_getReferrers", "name": "RobBrazier\\Piwik\\Piwik::getReferrers", "doc": "&quot;Initialise the Referrers Module.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_getSEO", "name": "RobBrazier\\Piwik\\Piwik::getSEO", "doc": "&quot;Initialise the SEO Module.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_getSitesManager", "name": "RobBrazier\\Piwik\\Piwik::getSitesManager", "doc": "&quot;Initialise the SitesManager Module.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_getVisitorInterest", "name": "RobBrazier\\Piwik\\Piwik::getVisitorInterest", "doc": "&quot;Initialise the VisitorInterest Module.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_getVisitsSummary", "name": "RobBrazier\\Piwik\\Piwik::getVisitsSummary", "doc": "&quot;Initialise the VisitsSummary Module.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_getTag", "name": "RobBrazier\\Piwik\\Piwik::getTag", "doc": "&quot;Get javascript tag for use in tracking the website.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_getCustom", "name": "RobBrazier\\Piwik\\Piwik::getCustom", "doc": "&quot;Create a custom request\nN.B. It is safer to raise a GitHub issue to request another API method.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_actions", "name": "RobBrazier\\Piwik\\Piwik::actions", "doc": "&quot;Get actions (hits) for the specific time period.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_downloads", "name": "RobBrazier\\Piwik\\Piwik::downloads", "doc": "&quot;Get file downloads for the specific time period.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_keywords", "name": "RobBrazier\\Piwik\\Piwik::keywords", "doc": "&quot;Get search keywords for the specific time period.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_last_visits", "name": "RobBrazier\\Piwik\\Piwik::last_visits", "doc": "&quot;Get information about last 10 visits (ip, time, country, pages, etc.).&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_last_visits_parsed", "name": "RobBrazier\\Piwik\\Piwik::last_visits_parsed", "doc": "&quot;Get information about last 10 visits (ip, time, country, pages, etc.)\nin a formatted array with GeoIP information if enabled.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_outlinks", "name": "RobBrazier\\Piwik\\Piwik::outlinks", "doc": "&quot;Get outlinks for the specific time period.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_page_titles", "name": "RobBrazier\\Piwik\\Piwik::page_titles", "doc": "&quot;Get page visit information for the specific time period.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_search_engines", "name": "RobBrazier\\Piwik\\Piwik::search_engines", "doc": "&quot;Get search engine referer information for the specific time period.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_unique_visitors", "name": "RobBrazier\\Piwik\\Piwik::unique_visitors", "doc": "&quot;Get unique visitors for the specific time period.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_visits", "name": "RobBrazier\\Piwik\\Piwik::visits", "doc": "&quot;Get all visits for the specific time period.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_websites", "name": "RobBrazier\\Piwik\\Piwik::websites", "doc": "&quot;Get referring websites (traffic sources) for the specific time period.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_seo_rank", "name": "RobBrazier\\Piwik\\Piwik::seo_rank", "doc": "&quot;Get SEO Rank for the website.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_tag", "name": "RobBrazier\\Piwik\\Piwik::tag", "doc": "&quot;Get javascript tag for use in tracking the website.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Piwik", "fromLink": "RobBrazier/Piwik/Piwik.html", "link": "RobBrazier/Piwik/Piwik.html#method_version", "name": "RobBrazier\\Piwik\\Piwik::version", "doc": "&quot;Get Version of the Piwik Server.&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik", "fromLink": "RobBrazier/Piwik.html", "link": "RobBrazier/Piwik/PiwikServiceProvider.html", "name": "RobBrazier\\Piwik\\PiwikServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\PiwikServiceProvider", "fromLink": "RobBrazier/Piwik/PiwikServiceProvider.html", "link": "RobBrazier/Piwik/PiwikServiceProvider.html#method_boot", "name": "RobBrazier\\Piwik\\PiwikServiceProvider::boot", "doc": "&quot;Bootstrap the application events.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\PiwikServiceProvider", "fromLink": "RobBrazier/Piwik/PiwikServiceProvider.html", "link": "RobBrazier/Piwik/PiwikServiceProvider.html#method_register", "name": "RobBrazier\\Piwik\\PiwikServiceProvider::register", "doc": "&quot;Register the service provider.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\PiwikServiceProvider", "fromLink": "RobBrazier/Piwik/PiwikServiceProvider.html", "link": "RobBrazier/Piwik/PiwikServiceProvider.html#method_provides", "name": "RobBrazier\\Piwik\\PiwikServiceProvider::provides", "doc": "&quot;Get the services provided by the provider.&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Query", "fromLink": "RobBrazier/Piwik/Query.html", "link": "RobBrazier/Piwik/Query/QueryDate.html", "name": "RobBrazier\\Piwik\\Query\\QueryDate", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Query\\QueryDate", "fromLink": "RobBrazier/Piwik/Query/QueryDate.html", "link": "RobBrazier/Piwik/Query/QueryDate.html#method___construct", "name": "RobBrazier\\Piwik\\Query\\QueryDate::__construct", "doc": "&quot;Date constructor.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Query\\QueryDate", "fromLink": "RobBrazier/Piwik/Query/QueryDate.html", "link": "RobBrazier/Piwik/Query/QueryDate.html#method_getPeriod", "name": "RobBrazier\\Piwik\\Query\\QueryDate::getPeriod", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Query\\QueryDate", "fromLink": "RobBrazier/Piwik/Query/QueryDate.html", "link": "RobBrazier/Piwik/Query/QueryDate.html#method_getDate", "name": "RobBrazier\\Piwik\\Query\\QueryDate::getDate", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Query", "fromLink": "RobBrazier/Piwik/Query.html", "link": "RobBrazier/Piwik/Query/QueryDates.html", "name": "RobBrazier\\Piwik\\Query\\QueryDates", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Query\\QueryDates", "fromLink": "RobBrazier/Piwik/Query/QueryDates.html", "link": "RobBrazier/Piwik/Query/QueryDates.html#method_getInstance", "name": "RobBrazier\\Piwik\\Query\\QueryDates::getInstance", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Query\\QueryDates", "fromLink": "RobBrazier/Piwik/Query/QueryDates.html", "link": "RobBrazier/Piwik/Query/QueryDates.html#method_get", "name": "RobBrazier\\Piwik\\Query\\QueryDates::get", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Query", "fromLink": "RobBrazier/Piwik/Query.html", "link": "RobBrazier/Piwik/Query/Url.html", "name": "RobBrazier\\Piwik\\Query\\Url", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Query\\Url", "fromLink": "RobBrazier/Piwik/Query/Url.html", "link": "RobBrazier/Piwik/Query/Url.html#method___construct", "name": "RobBrazier\\Piwik\\Query\\Url::__construct", "doc": "&quot;Url constructor.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Query\\Url", "fromLink": "RobBrazier/Piwik/Query/Url.html", "link": "RobBrazier/Piwik/Query/Url.html#method_setScheme", "name": "RobBrazier\\Piwik\\Query\\Url::setScheme", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Query\\Url", "fromLink": "RobBrazier/Piwik/Query/Url.html", "link": "RobBrazier/Piwik/Query/Url.html#method_setHost", "name": "RobBrazier\\Piwik\\Query\\Url::setHost", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Query\\Url", "fromLink": "RobBrazier/Piwik/Query/Url.html", "link": "RobBrazier/Piwik/Query/Url.html#method_setPort", "name": "RobBrazier\\Piwik\\Query\\Url::setPort", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Query\\Url", "fromLink": "RobBrazier/Piwik/Query/Url.html", "link": "RobBrazier/Piwik/Query/Url.html#method_setPath", "name": "RobBrazier\\Piwik\\Query\\Url::setPath", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Query\\Url", "fromLink": "RobBrazier/Piwik/Query/Url.html", "link": "RobBrazier/Piwik/Query/Url.html#method___toString", "name": "RobBrazier\\Piwik\\Query\\Url::__toString", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Query", "fromLink": "RobBrazier/Piwik/Query.html", "link": "RobBrazier/Piwik/Query/UrlQueryBuilder.html", "name": "RobBrazier\\Piwik\\Query\\UrlQueryBuilder", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Query\\UrlQueryBuilder", "fromLink": "RobBrazier/Piwik/Query/UrlQueryBuilder.html", "link": "RobBrazier/Piwik/Query/UrlQueryBuilder.html#method_setModule", "name": "RobBrazier\\Piwik\\Query\\UrlQueryBuilder::setModule", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Query\\UrlQueryBuilder", "fromLink": "RobBrazier/Piwik/Query/UrlQueryBuilder.html", "link": "RobBrazier/Piwik/Query/UrlQueryBuilder.html#method_setMethod", "name": "RobBrazier\\Piwik\\Query\\UrlQueryBuilder::setMethod", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Query\\UrlQueryBuilder", "fromLink": "RobBrazier/Piwik/Query/UrlQueryBuilder.html", "link": "RobBrazier/Piwik/Query/UrlQueryBuilder.html#method_setDate", "name": "RobBrazier\\Piwik\\Query\\UrlQueryBuilder::setDate", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Query\\UrlQueryBuilder", "fromLink": "RobBrazier/Piwik/Query/UrlQueryBuilder.html", "link": "RobBrazier/Piwik/Query/UrlQueryBuilder.html#method_setSiteId", "name": "RobBrazier\\Piwik\\Query\\UrlQueryBuilder::setSiteId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Query\\UrlQueryBuilder", "fromLink": "RobBrazier/Piwik/Query/UrlQueryBuilder.html", "link": "RobBrazier/Piwik/Query/UrlQueryBuilder.html#method_setFormat", "name": "RobBrazier\\Piwik\\Query\\UrlQueryBuilder::setFormat", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Query\\UrlQueryBuilder", "fromLink": "RobBrazier/Piwik/Query/UrlQueryBuilder.html", "link": "RobBrazier/Piwik/Query/UrlQueryBuilder.html#method_setTokenAuth", "name": "RobBrazier\\Piwik\\Query\\UrlQueryBuilder::setTokenAuth", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Query\\UrlQueryBuilder", "fromLink": "RobBrazier/Piwik/Query/UrlQueryBuilder.html", "link": "RobBrazier/Piwik/Query/UrlQueryBuilder.html#method_add", "name": "RobBrazier\\Piwik\\Query\\UrlQueryBuilder::add", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Query\\UrlQueryBuilder", "fromLink": "RobBrazier/Piwik/Query/UrlQueryBuilder.html", "link": "RobBrazier/Piwik/Query/UrlQueryBuilder.html#method_addAll", "name": "RobBrazier\\Piwik\\Query\\UrlQueryBuilder::addAll", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Query\\UrlQueryBuilder", "fromLink": "RobBrazier/Piwik/Query/UrlQueryBuilder.html", "link": "RobBrazier/Piwik/Query/UrlQueryBuilder.html#method_build", "name": "RobBrazier\\Piwik\\Query\\UrlQueryBuilder::build", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Repository", "fromLink": "RobBrazier/Piwik/Repository.html", "link": "RobBrazier/Piwik/Repository/ConfigRepository.html", "name": "RobBrazier\\Piwik\\Repository\\ConfigRepository", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Repository\\ConfigRepository", "fromLink": "RobBrazier/Piwik/Repository/ConfigRepository.html", "link": "RobBrazier/Piwik/Repository/ConfigRepository.html#method_get", "name": "RobBrazier\\Piwik\\Repository\\ConfigRepository::get", "doc": "&quot;Retrieve a configuration item.&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Repository\\Config", "fromLink": "RobBrazier/Piwik/Repository/Config.html", "link": "RobBrazier/Piwik/Repository/Config/FileConfigRepository.html", "name": "RobBrazier\\Piwik\\Repository\\Config\\FileConfigRepository", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Repository\\Config\\FileConfigRepository", "fromLink": "RobBrazier/Piwik/Repository/Config/FileConfigRepository.html", "link": "RobBrazier/Piwik/Repository/Config/FileConfigRepository.html#method_get", "name": "RobBrazier\\Piwik\\Repository\\Config\\FileConfigRepository::get", "doc": "&quot;Retrieve a configuration item.&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Repository", "fromLink": "RobBrazier/Piwik/Repository.html", "link": "RobBrazier/Piwik/Repository/RequestRepository.html", "name": "RobBrazier\\Piwik\\Repository\\RequestRepository", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Repository\\RequestRepository", "fromLink": "RobBrazier/Piwik/Repository/RequestRepository.html", "link": "RobBrazier/Piwik/Repository/RequestRepository.html#method_send", "name": "RobBrazier\\Piwik\\Repository\\RequestRepository::send", "doc": "&quot;Send a request to the Piwik API.&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Repository\\Request", "fromLink": "RobBrazier/Piwik/Repository/Request.html", "link": "RobBrazier/Piwik/Repository/Request/GuzzleRequestRepository.html", "name": "RobBrazier\\Piwik\\Repository\\Request\\GuzzleRequestRepository", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Repository\\Request\\GuzzleRequestRepository", "fromLink": "RobBrazier/Piwik/Repository/Request/GuzzleRequestRepository.html", "link": "RobBrazier/Piwik/Repository/Request/GuzzleRequestRepository.html#method___construct", "name": "RobBrazier\\Piwik\\Repository\\Request\\GuzzleRequestRepository::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Repository\\Request\\GuzzleRequestRepository", "fromLink": "RobBrazier/Piwik/Repository/Request/GuzzleRequestRepository.html", "link": "RobBrazier/Piwik/Repository/Request/GuzzleRequestRepository.html#method_send", "name": "RobBrazier\\Piwik\\Repository\\Request\\GuzzleRequestRepository::send", "doc": "&quot;Send a request to the Piwik API.&quot;"},
            
            {"type": "Class", "fromName": "RobBrazier\\Piwik\\Request", "fromLink": "RobBrazier/Piwik/Request.html", "link": "RobBrazier/Piwik/Request/RequestOptions.html", "name": "RobBrazier\\Piwik\\Request\\RequestOptions", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Request\\RequestOptions", "fromLink": "RobBrazier/Piwik/Request/RequestOptions.html", "link": "RobBrazier/Piwik/Request/RequestOptions.html#method_setMethod", "name": "RobBrazier\\Piwik\\Request\\RequestOptions::setMethod", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Request\\RequestOptions", "fromLink": "RobBrazier/Piwik/Request/RequestOptions.html", "link": "RobBrazier/Piwik/Request/RequestOptions.html#method_usePeriod", "name": "RobBrazier\\Piwik\\Request\\RequestOptions::usePeriod", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Request\\RequestOptions", "fromLink": "RobBrazier/Piwik/Request/RequestOptions.html", "link": "RobBrazier/Piwik/Request/RequestOptions.html#method_setSiteId", "name": "RobBrazier\\Piwik\\Request\\RequestOptions::setSiteId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Request\\RequestOptions", "fromLink": "RobBrazier/Piwik/Request/RequestOptions.html", "link": "RobBrazier/Piwik/Request/RequestOptions.html#method_useSiteId", "name": "RobBrazier\\Piwik\\Request\\RequestOptions::useSiteId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Request\\RequestOptions", "fromLink": "RobBrazier/Piwik/Request/RequestOptions.html", "link": "RobBrazier/Piwik/Request/RequestOptions.html#method_setFormat", "name": "RobBrazier\\Piwik\\Request\\RequestOptions::setFormat", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Request\\RequestOptions", "fromLink": "RobBrazier/Piwik/Request/RequestOptions.html", "link": "RobBrazier/Piwik/Request/RequestOptions.html#method_useFormat", "name": "RobBrazier\\Piwik\\Request\\RequestOptions::useFormat", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Request\\RequestOptions", "fromLink": "RobBrazier/Piwik/Request/RequestOptions.html", "link": "RobBrazier/Piwik/Request/RequestOptions.html#method_getFormat", "name": "RobBrazier\\Piwik\\Request\\RequestOptions::getFormat", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Request\\RequestOptions", "fromLink": "RobBrazier/Piwik/Request/RequestOptions.html", "link": "RobBrazier/Piwik/Request/RequestOptions.html#method_useTokenAuth", "name": "RobBrazier\\Piwik\\Request\\RequestOptions::useTokenAuth", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Request\\RequestOptions", "fromLink": "RobBrazier/Piwik/Request/RequestOptions.html", "link": "RobBrazier/Piwik/Request/RequestOptions.html#method_setArguments", "name": "RobBrazier\\Piwik\\Request\\RequestOptions::setArguments", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Request\\RequestOptions", "fromLink": "RobBrazier/Piwik/Request/RequestOptions.html", "link": "RobBrazier/Piwik/Request/RequestOptions.html#method_flattenArray", "name": "RobBrazier\\Piwik\\Request\\RequestOptions::flattenArray", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Request\\RequestOptions", "fromLink": "RobBrazier/Piwik/Request/RequestOptions.html", "link": "RobBrazier/Piwik/Request/RequestOptions.html#method_build", "name": "RobBrazier\\Piwik\\Request\\RequestOptions::build", "doc": "&quot;&quot;"},
            
            {"type": "Trait", "fromName": "RobBrazier\\Piwik\\Traits", "fromLink": "RobBrazier/Piwik/Traits.html", "link": "RobBrazier/Piwik/Traits/ConfigTrait.html", "name": "RobBrazier\\Piwik\\Traits\\ConfigTrait", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Traits\\ConfigTrait", "fromLink": "RobBrazier/Piwik/Traits/ConfigTrait.html", "link": "RobBrazier/Piwik/Traits/ConfigTrait.html#method___construct", "name": "RobBrazier\\Piwik\\Traits\\ConfigTrait::__construct", "doc": "&quot;ConfigTrait constructor.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Traits\\ConfigTrait", "fromLink": "RobBrazier/Piwik/Traits/ConfigTrait.html", "link": "RobBrazier/Piwik/Traits/ConfigTrait.html#method_getSiteId", "name": "RobBrazier\\Piwik\\Traits\\ConfigTrait::getSiteId", "doc": "&quot;Retrieve Site ID from configuration.&quot;"},
                    {"type": "Method", "fromName": "RobBrazier\\Piwik\\Traits\\ConfigTrait", "fromLink": "RobBrazier/Piwik/Traits/ConfigTrait.html", "link": "RobBrazier/Piwik/Traits/ConfigTrait.html#method_getPiwikUrl", "name": "RobBrazier\\Piwik\\Traits\\ConfigTrait::getPiwikUrl", "doc": "&quot;Retrieve Piwik URL from configuration.&quot;"},
            
            {"type": "Trait", "fromName": "RobBrazier\\Piwik\\Traits", "fromLink": "RobBrazier/Piwik/Traits.html", "link": "RobBrazier/Piwik/Traits/DateTrait.html", "name": "RobBrazier\\Piwik\\Traits\\DateTrait", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Traits\\DateTrait", "fromLink": "RobBrazier/Piwik/Traits/DateTrait.html", "link": "RobBrazier/Piwik/Traits/DateTrait.html#method_getDate", "name": "RobBrazier\\Piwik\\Traits\\DateTrait::getDate", "doc": "&quot;Get QueryDate object from period name.&quot;"},
            
            {"type": "Trait", "fromName": "RobBrazier\\Piwik\\Traits", "fromLink": "RobBrazier/Piwik/Traits.html", "link": "RobBrazier/Piwik/Traits/FormatTrait.html", "name": "RobBrazier\\Piwik\\Traits\\FormatTrait", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "RobBrazier\\Piwik\\Traits\\FormatTrait", "fromLink": "RobBrazier/Piwik/Traits/FormatTrait.html", "link": "RobBrazier/Piwik/Traits/FormatTrait.html#method_validateFormat", "name": "RobBrazier\\Piwik\\Traits\\FormatTrait::validateFormat", "doc": "&quot;Check format against allowed values.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


